import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { useAuth } from '@/contexts/AuthContext';
import { toast } from '@/hooks/use-toast';
import { Loader2, Mail, Lock, User } from 'lucide-react';

interface RegisterFormProps {
  onToggleMode: () => void;
  onSuccess: () => void;
}

const RegisterForm: React.FC<RegisterFormProps> = ({ onToggleMode, onSuccess }) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const { register } = useAuth();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!name || !email || !password || !confirmPassword) {
      toast({
        title: "Validation Error",
        description: "Please fill in all fields.",
        variant: "destructive"
      });
      return;
    }

    if (password !== confirmPassword) {
      toast({
        title: "Validation Error",
        description: "Passwords do not match.",
        variant: "destructive"
      });
      return;
    }

    if (password.length < 6) {
      toast({
        title: "Validation Error",
        description: "Password must be at least 6 characters long.",
        variant: "destructive"
      });
      return;
    }

    setIsLoading(true);

    try {
      const success = await register(email, password, name);

      if (success) {
        toast({
          title: "Account Created!",
          description: "Welcome to our shopping platform."
        });
        onSuccess();
      } else {
        toast({
          title: "Registration Failed",
          description: "An error occurred during registration.",
          variant: "destructive"
        });
      }
    } catch (error) {
      toast({
        title: "Error",
        description: "An error occurred during registration.",
        variant: "destructive"
      });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <Card className="w-full max-w-md mx-auto" data-id="tw9b47d0y" data-path="src/components/auth/RegisterForm.tsx">
      <CardHeader className="space-y-1" data-id="opt78vfd1" data-path="src/components/auth/RegisterForm.tsx">
        <CardTitle className="text-2xl font-bold text-center" data-id="59f75nyrc" data-path="src/components/auth/RegisterForm.tsx">Create Account</CardTitle>
        <CardDescription className="text-center" data-id="hd2dgrd8n" data-path="src/components/auth/RegisterForm.tsx">
          Join us to start your shopping journey
        </CardDescription>
      </CardHeader>
      <CardContent data-id="6pv8u11wr" data-path="src/components/auth/RegisterForm.tsx">
        <form onSubmit={handleSubmit} className="space-y-4" data-id="upvezw7ct" data-path="src/components/auth/RegisterForm.tsx">
          <div className="space-y-2" data-id="z09ayrvif" data-path="src/components/auth/RegisterForm.tsx">
            <Label htmlFor="name" data-id="jmq4z1uwc" data-path="src/components/auth/RegisterForm.tsx">Full Name</Label>
            <div className="relative" data-id="mm72arp97" data-path="src/components/auth/RegisterForm.tsx">
              <User className="absolute left-3 top-3 h-4 w-4 text-gray-400" data-id="tjb7gtce9" data-path="src/components/auth/RegisterForm.tsx" />
              <Input
                id="name"
                type="text"
                placeholder="Enter your full name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="pl-10"
                disabled={isLoading} data-id="ag8zthsw4" data-path="src/components/auth/RegisterForm.tsx" />

            </div>
          </div>
          
          <div className="space-y-2" data-id="jghyybx2a" data-path="src/components/auth/RegisterForm.tsx">
            <Label htmlFor="email" data-id="tej6p8jcu" data-path="src/components/auth/RegisterForm.tsx">Email</Label>
            <div className="relative" data-id="1hvkf0vug" data-path="src/components/auth/RegisterForm.tsx">
              <Mail className="absolute left-3 top-3 h-4 w-4 text-gray-400" data-id="lpqdxktd1" data-path="src/components/auth/RegisterForm.tsx" />
              <Input
                id="email"
                type="email"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="pl-10"
                disabled={isLoading} data-id="eynsrsk46" data-path="src/components/auth/RegisterForm.tsx" />

            </div>
          </div>
          
          <div className="space-y-2" data-id="g4mjf41qm" data-path="src/components/auth/RegisterForm.tsx">
            <Label htmlFor="password" data-id="z1jttk4ut" data-path="src/components/auth/RegisterForm.tsx">Password</Label>
            <div className="relative" data-id="1eths9lia" data-path="src/components/auth/RegisterForm.tsx">
              <Lock className="absolute left-3 top-3 h-4 w-4 text-gray-400" data-id="bkt0wiovd" data-path="src/components/auth/RegisterForm.tsx" />
              <Input
                id="password"
                type="password"
                placeholder="Create a password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="pl-10"
                disabled={isLoading} data-id="l8tu266jk" data-path="src/components/auth/RegisterForm.tsx" />

            </div>
          </div>
          
          <div className="space-y-2" data-id="hn86o99u0" data-path="src/components/auth/RegisterForm.tsx">
            <Label htmlFor="confirmPassword" data-id="elxjvowko" data-path="src/components/auth/RegisterForm.tsx">Confirm Password</Label>
            <div className="relative" data-id="bkvlthndz" data-path="src/components/auth/RegisterForm.tsx">
              <Lock className="absolute left-3 top-3 h-4 w-4 text-gray-400" data-id="n3odeeap5" data-path="src/components/auth/RegisterForm.tsx" />
              <Input
                id="confirmPassword"
                type="password"
                placeholder="Confirm your password"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                className="pl-10"
                disabled={isLoading} data-id="o60t0ckm7" data-path="src/components/auth/RegisterForm.tsx" />

            </div>
          </div>
          
          <Button
            type="submit"
            className="w-full"
            disabled={isLoading} data-id="8ipqrv5n6" data-path="src/components/auth/RegisterForm.tsx">

            {isLoading ?
            <>
                <Loader2 className="mr-2 h-4 w-4 animate-spin" data-id="jz5u1ezi7" data-path="src/components/auth/RegisterForm.tsx" />
                Creating account...
              </> :

            'Create Account'
            }
          </Button>
          
          <div className="text-center" data-id="knjuamdm7" data-path="src/components/auth/RegisterForm.tsx">
            <Button
              type="button"
              variant="link"
              onClick={onToggleMode}
              className="text-sm" data-id="zbemmr1s2" data-path="src/components/auth/RegisterForm.tsx">

              Already have an account? Sign in
            </Button>
          </div>
        </form>
      </CardContent>
    </Card>);

};

export default RegisterForm;