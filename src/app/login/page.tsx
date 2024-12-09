import { LoginLink } from "@kinde-oss/kinde-auth-nextjs/components";
import { Button } from "@/components/ui/button";

export default function LoginPage() {
    return (
        <main>
        <h1>Repair shop</h1>
        <Button onClick={() => LoginLink()}>Login</Button>
        </main>
    );
}