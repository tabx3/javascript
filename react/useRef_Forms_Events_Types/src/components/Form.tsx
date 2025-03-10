import { useRef, useState } from "react";
type FormData = {
  name: string;
  email: string;
  password: string;
};

const Form = () => {
  const [submitData, setSubmitData] = useState<FormData>({
    name: "",
    email: "",
    password: "",
  });

  const name = useRef<HTMLInputElement>(null);
  const email = useRef<HTMLInputElement>(null);
  const password = useRef<HTMLInputElement>(null);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSubmitData({
      name: name.current?.value || "",
      email: email.current?.value || "",
      password: password.current?.value || "",
    });
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <input type="text" ref={name} />
        <input type="email" ref={email} />
        <input type="password" ref={password} />
        <button type="submit">Submit</button>
      </form>
      <section>
        <h1>Name: {submitData.name}</h1>
        <h1>Email: {submitData.email}</h1>
        <h1>Password: {submitData.password}</h1>
      </section>
    </>
  );
};

export default Form;
