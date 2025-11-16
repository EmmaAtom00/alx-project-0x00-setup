import Button from "@/components/Button";
import Card from "@/components/Card";

const Landing: React.FC = () => {
  return (
    <div>
      <h1 className=" text-xl font-extralight">Landing Page</h1>
      <Card />
      <Button title="Click me" styles="size-small rounded-sm" />
      <Button title="Medium size" styles="size-medium rounded-md" />
      <Button title="Medium size" styles="size-medium rounded-lg" />
      <Button title="Large size" styles="size-large rounded-full" />
    </div>
  );
};
export default Landing;
