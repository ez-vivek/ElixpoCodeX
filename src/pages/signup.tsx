import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { toast } from "sonner";
import { Link } from "react-router-dom";
import { Logo } from "@/components/Logo";

const Signup = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!email || !password) {
      toast.error("Please fill in both fields.");
      return;
    }

    setLoading(true);
    // You can replace this with your actual sign-up API call
    setTimeout(() => {
      toast.success("Signed up successfully!");
      setLoading(false);
      // Redirect to the login or home page
    }, 1500);
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-background">
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
      <div className="w-full sm:w-[400px] p-6 bg-muted rounded-lg shadow-lg">
        <h2 className="text-2xl font-bold text-center mb-6">Sign Up</h2>
        
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <Input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Email Address"
              required
            />
          </div>
          
          <div>
            <Input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Password"
              required
            />
          </div>

          <Button
            variant="default"
            className="w-full"
            type="submit"
            disabled={loading}
          >
            {loading ? "Signing up..." : "Sign Up"}
          </Button>
        </form>

        <div className="mt-4 text-center text-sm">
          <span>Already have an account? </span>
          <Link to="/signin" className="text-accent hover:underline text-amber-200">
            Sign In
          </Link>
        </div>

        {/* Optional: Add Google or GitHub sign-up buttons */}
        <div className="mt-6">
          <Button
            variant="outline"
            className="w-full flex items-center justify-center hover:border-2 hover:border-amber-200"
            onClick={() => {
              console.log("Google sign-up button clicked");
              // handleGoogleSignUp();
            }}
          >
            <img src="/icons/google.svg" alt="Google" className="w-5 h-5 mr-2" />
            Sign Up with Google
          </Button>

          <Button
            variant="outline"
            className="w-full mt-4 flex items-center justify-center hover:border-2 hover:border-amber-200"
            onClick={() => {
              console.log("GitHub sign-up button clicked");
              // handleGithubSignUp();
            }}
          >
            <img src="/icons/github.svg" alt="GitHub" className="w-5 h-5 mr-2" />
            Sign Up with GitHub
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Signup;
