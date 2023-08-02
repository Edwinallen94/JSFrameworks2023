interface WelcomeProps {
  name?: string;
}

export default function Welcome({ name = "user" }: WelcomeProps) {
  return <p>Hello {name} </p>;
}
