import logo from "../assets/logo.svg";
import { useState } from "react";
import { supabase } from "../helpers/supabase";
import { useNavigate } from "react-router-dom";
// import { useDispatch, useSelector } from "react-redux";
// Database password l9aQtrJ1tTyMdj2t
/*

*/
export const AuthenticationPage = () => {
  const [state, setState] = useState<"login" | "sign up">("login");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [repeatPassword, setRepeatPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  // const dispatch = useDispatch();
  // const user = useSelector((state: any) => state.user.user);

  const submitHandler = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");
    setLoading(true);
    if (state === "sign up" && password !== repeatPassword)
      return setError("Passwords do not match");
    if (state === "sign up" && password.length < 8)
      return setError("Password must be at least 8 characters long");
    if (state === "sign up") {
      const { error } = await supabase.auth.signUp({
        email,
        password,
      });
      if (error) {
        setError(error.message);
        return;
      } else {
        navigate("/home");
      }
    } else if (state === "login") {
      const { error } = await supabase.auth.signInWithPassword({
        email,
        password,
      });
      if (error) {
        setError(error.message);
        return;
      } else {
        navigate("/home");
      }
    }
    setLoading(false);
  };

  const stateHandler = () => setState(state === "login" ? "sign up" : "login");
  return (
    <div className="flex flex-col pt-12 sm:pt-[58.408px] px-6 items-center pb-[250px] h-screen gap-[62.99px]">
      <img src={logo} alt="Logo" className="h-[25.6px] w-8" />
      <section className="bg-secondary rounded-[20px] p-7 w-fit sm:w-[400px] h-fit ">
        <h1 className="text-white text-[32px] capitalize font-normal  !tracking-[-0.5px]">
          {state}
        </h1>
        <form action="" onSubmit={submitHandler}>
          <label htmlFor="email-address">
            <input
              type="email"
              name="email-address"
              id="email-address"
              placeholder="Email address"
              onChange={(e) => setEmail(e.target.value)}
              className="w-full bg-transparent border-b-[1px] caret-red border-[rgba(255,255,255,0.5)] focus:border-white text-white p-2 mt-4 placeholder:opacity-50 focus:outline-none"
            />
          </label>
          <label htmlFor="password">
            <input
              type="password"
              name="password"
              id="password"
              placeholder="Password"
              onChange={(e) => setPassword(e.target.value)}
              className="w-full bg-transparent border-b-[1px] caret-red border-[rgba(255,255,255,0.5)] focus:border-white text-white p-2 mt-4 placeholder:opacity-50 focus:outline-none"
            />
          </label>
          {state === "sign up" && (
            <label htmlFor="repeat-password">
              <input
                type="password"
                name="repeat-password"
                id="repeat-password"
                placeholder="Repeat Password"
                onChange={(e) => setRepeatPassword(e.target.value)}
                className="w-full bg-transparent border-b-[1px] caret-red border-[rgba(255,255,255,0.5)] focus:border-white text-white p-2 mt-4 placeholder:opacity-50 focus:outline-none"
              />
            </label>
          )}
          <button
            type="submit"
            className="bg-red hover:bg-white flex justify-center gap-3 mt-8 w-full rounded-md h-12 leading-normal py-[14px] text-white hover:text-secondary text-[15px] font-normal text-center  "
          >
            {loading && <span className="loader"></span>}
            {state === "login" ? "Login to your account" : "Create an account"}
          </button>
          <p className="text-white text-[15px] font-normal text-center mt-4">
            {state === "login"
              ? "Don’t have an account?"
              : "Already have an account?"}
            <button
              type="button"
              onClick={stateHandler}
              className="text-red ml-1"
            >
              {state === "login" ? "Sign up" : "Login"}
            </button>
          </p>
        </form>
      </section>
    </div>
  );
};
