import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

function JobCard({ job }) {
  return (
    <Card>
      <CardHeader>
        <CardTitle>{job.company}</CardTitle>
      </CardHeader>
      <CardContent>
        <p className="text-sm">Position: {job.position}</p>
        <p className="text-sm">Location: {job.location}</p>
        <p className="text-sm font-medium text-blue-600">
          Status: {job.status}
        </p>
        <div className="mt-4 flex gap-2">
          <Button size="sm" variant="outline">
            Edit
          </Button>
          <Button size="sm" variant="destructive">
            Delete
          </Button>
        </div>
      </CardContent>
    </Card>
  );
}

export default JobCard;
