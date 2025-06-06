import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { useAuth } from '@/contexts/AuthContext';
import { toast } from '@/hooks/use-toast';
import { Loader2, Mail, Lock } from 'lucide-react';

interface LoginFormProps {
  onToggleMode: () => void;
  onSuccess: () => void;
}

const LoginForm: React.FC<LoginFormProps> = ({ onToggleMode, onSuccess }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const { login } = useAuth();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!email || !password) {
      toast({
        title: "Validation Error",
        description: "Please fill in all fields.",
        variant: "destructive"
      });
      return;
    }

    setIsLoading(true);

    try {
      const success = await login(email, password);

      if (success) {
        toast({
          title: "Welcome back!",
          description: "You have successfully logged in."
        });
        onSuccess();
      } else {
        toast({
          title: "Login Failed",
          description: "Invalid email or password.",
          variant: "destructive"
        });
      }
    } catch (error) {
      toast({
        title: "Error",
        description: "An error occurred during login.",
        variant: "destructive"
      });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <Card className="w-full max-w-md mx-auto" data-id="xs637rq85" data-path="src/components/auth/LoginForm.tsx">
      <CardHeader className="space-y-1" data-id="r9ccj82lt" data-path="src/components/auth/LoginForm.tsx">
        <CardTitle className="text-2xl font-bold text-center" data-id="0wwcxkq0v" data-path="src/components/auth/LoginForm.tsx">Welcome Back</CardTitle>
        <CardDescription className="text-center" data-id="anrqh79s2" data-path="src/components/auth/LoginForm.tsx">
          Sign in to access your shopping assistant
        </CardDescription>
      </CardHeader>
      <CardContent data-id="tqsqc8411" data-path="src/components/auth/LoginForm.tsx">
        <form onSubmit={handleSubmit} className="space-y-4" data-id="esm04dkys" data-path="src/components/auth/LoginForm.tsx">
          <div className="space-y-2" data-id="6n6h4s7gh" data-path="src/components/auth/LoginForm.tsx">
            <Label htmlFor="email" data-id="v5yk4ehtr" data-path="src/components/auth/LoginForm.tsx">Email</Label>
            <div className="relative" data-id="jxu2kvg4q" data-path="src/components/auth/LoginForm.tsx">
              <Mail className="absolute left-3 top-3 h-4 w-4 text-gray-400" data-id="tk4mrolo9" data-path="src/components/auth/LoginForm.tsx" />
              <Input
                id="email"
                type="email"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="pl-10"
                disabled={isLoading} data-id="qiye29ieu" data-path="src/components/auth/LoginForm.tsx" />

            </div>
          </div>
          
          <div className="space-y-2" data-id="uz4mcrfm6" data-path="src/components/auth/LoginForm.tsx">
            <Label htmlFor="password" data-id="a2gr98zhi" data-path="src/components/auth/LoginForm.tsx">Password</Label>
            <div className="relative" data-id="q48m791z6" data-path="src/components/auth/LoginForm.tsx">
              <Lock className="absolute left-3 top-3 h-4 w-4 text-gray-400" data-id="4dp53616l" data-path="src/components/auth/LoginForm.tsx" />
              <Input
                id="password"
                type="password"
                placeholder="Enter your password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="pl-10"
                disabled={isLoading} data-id="p7jc6u661" data-path="src/components/auth/LoginForm.tsx" />

            </div>
          </div>
          
          <Button
            type="submit"
            className="w-full"
            disabled={isLoading} data-id="u7jne4mzx" data-path="src/components/auth/LoginForm.tsx">

            {isLoading ?
            <>
                <Loader2 className="mr-2 h-4 w-4 animate-spin" data-id="1u5x729q7" data-path="src/components/auth/LoginForm.tsx" />
                Signing in...
              </> :

            'Sign In'
            }
          </Button>
          
          <div className="text-center" data-id="v07hzzb4q" data-path="src/components/auth/LoginForm.tsx">
            <Button
              type="button"
              variant="link"
              onClick={onToggleMode}
              className="text-sm" data-id="kbryb5nmr" data-path="src/components/auth/LoginForm.tsx">

              Don't have an account? Sign up
            </Button>
          </div>
        </form>
      </CardContent>
    </Card>);

};

export default LoginForm;