import { Auth } from "@supabase/auth-ui-react";
import { ThemeSupa } from "@supabase/auth-ui-shared";
import React from "react";
import { supabase } from "../supabaseClient";

function Login() {
  return (
    <main className="pt-40 bg-red-700">
      <div className=" mx-auto">
        <div className="max-w-md mx-auto pb-10 px-4 cursor-pointer">
          <Auth
            supabaseClient={supabase}
            appearance={{ theme: ThemeSupa }}
            theme="dark"
            providers={["google"]}
          />
        </div>
      </div>
    </main>
  );
}

export default Login;
