import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Logo } from "@/components/Logo";
import { useNavigate } from "react-router-dom";
// import { signInWithGoogle, signInWithGithub } from "@/services/auth"; // Assuming you have auth services
import { toast } from "sonner";

export default function SignIn() {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);

  const handleEmailSignIn = async () => {
    if (!email || !password) {
      toast.error("Please fill in all fields.");
      return;
    }

    setLoading(true);
    try {
      // Replace with your email/password sign-in logic
      await fakeEmailSignIn(email, password);
      toast.success("Signed in successfully!");
      navigate("/");
    } catch (error) {
      toast.error("Failed to sign in. Check your credentials.");
    } finally {
      setLoading(false);
    }
  };

//   const handleGoogleSignIn = async () => {
//     try {
//       await signInWithGoogle();
//       toast.success("Signed in with Google!");
//       navigate("/");
//     } catch (error) {
//       toast.error("Google sign-in failed.");
//     }
//   };

//   const handleGithubSignIn = async () => {
//     try {
//       await signInWithGithub();
//       toast.success("Signed in with GitHub!");
//       navigate("/");
//     } catch (error) {
//       toast.error("GitHub sign-in failed.");
//     }
//   };

  return (
    
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-b from-background via-background/95 to-muted background/90">
      <div className="container flex h-14 items-center top-3 left-3 absolute">
        <div className="flex items-center gap-2">
          <a href="/" className="flex items-center gap-2 font-bold">
            <Logo />
          </a>
          <p className="text-2xl font-bold text-primary text-amber-200">
            CodeX
          </p>
        </div>
    </div>
      <div className="w-full max-w-md bg-background p-6 rounded-lg shadow-md border border-border">
        <h1 className="text-2xl font-semibold text-center mb-6">Sign In</h1>

        {/* Email/Password Sign-In */}
        <div className="space-y-4">
          <div>
            <label className="text-sm font-medium">Email</label>
            <Input
              type="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="mt-1"
            />
          </div>
          <div>
            <label className="text-sm font-medium">Password</label>
            <Input
              type="password"
              placeholder="Enter your password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="mt-1"
            />
          </div>
          <Button
            onClick={handleEmailSignIn}
            className="w-full"
            disabled={loading}
          >
            {loading ? "Signing in..." : "Sign In"}
          </Button>
        </div>

        {/* Divider */}
        <div className="relative my-6">
          <div className="absolute inset-0 flex items-center">
            <div className="w-full border-t border-border"></div>
          </div>
          <div className="relative text-sm text-muted-foreground text-center">
            <span className="bg-background px-2">OR</span>
          </div>
        </div>

        {/* Social Sign-In */}
        <div className="space-y-4">
          <Button
            variant="outline"
            className="w-full flex items-center justify-center"
            onClick={() => {
              console.log("Google sign-in button clicked");
            //   handleGoogleSignIn();
            }}
          >
            <img
              className="h-5 w-5 relative"
              src="/icons/google.svg"
              alt="Google"
            />
            Sign in with Google
          </Button>
          <Button
            variant="outline"
            className="w-full flex items-center justify-center"
            onClick={() => console.log("GitHub sign-in button clicked")}
          >
            <img
              src="/icons/github.svg"
              alt="GitHub"
              className="h-5 w-5 mr-2 invert-1"
            />
            Sign in with GitHub
          </Button>
        </div>

        {/* Footer */}
        <p className="text-sm text-muted-foreground text-center mt-6">
          Don't have an account?{" "}
          <span
            className="text-primary cursor-pointer text-amber-200"
            onClick={() => navigate("/signup")}
          >
            Sign Up
          </span>
        </p>
      </div>
    </div>
  );
}

// Mocking email sign-in for illustration
const fakeEmailSignIn = (email: string, password: string) =>
  new Promise<void>((resolve, reject) =>
    setTimeout(() => {
      if (email === "test@example.com" && password === "password") resolve();
      else reject(new Error("Invalid credentials"));
    }, 1000)
  );
