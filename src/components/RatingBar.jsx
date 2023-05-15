import { Typography, Progress } from "@material-tailwind/react";
 
export default function RatingBar() {
  return (
    <div className="flex max-w-[30rem] flex-col gap-4 mx-auto">
      <Typography color="white" variant="h4">Rating & Reviews:</Typography>
      <Progress value={60} color="blue" />
      <Progress value={90} color="blur" />
      <Progress value={30} color="blue" />
      <Progress value={5} color="blue" />
      <Progress value={2} color="blue" />
    </div>
  );
}