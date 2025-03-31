import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  Select,
  SelectTrigger,
  SelectContent,
  SelectItem,
  SelectValue,
} from "@/components/ui/select";
import { useForm, Controller } from "react-hook-form";
import { z } from "zod";
import { set } from "lodash";

function JobForm({ setJobs, setShowForm }) {
  const schema = z.object({
    name: z.string().min(1, "Company name is required"),
    title: z.string().min(1, "Job title is required"),
    location: z.string().min(1, "Location is required"),
    status: z
      .string()
      .refine(
        (val) => ["Applied", "Interviewing", "Offer", "Rejected"].includes(val),
        {
          message: "Status is required",
        }
      ),
  });

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
    control,
  } = useForm({
    resolver: zodResolver(schema),
  });

  const onSubmit = (data) => {
    setJobs((prevJobs) => [
      ...prevJobs,
      {
        id: prevJobs.length + 1,
        company: data.name,
        position: data.title,
        location: data.location,
        status: data.status,
      },
    ]);
    setShowForm(false);
  };

  return (
    <div className="bg-white p-6 rounded-md shadow max-w-4xl mx-auto mb-10">
      <h2 className="text-xl font-semibold mb-4">Add New Job</h2>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="grid grid-cols-1 md:grid-cols-2 gap-4"
      >
        <div>
          <Input {...register("name")} placeholder="Company Name" />
          {errors.name && (
            <span className="text-red-500">{errors.name.message}</span>
          )}
        </div>
        <div>
          <Input {...register("title")} placeholder="Job Title" />
          {errors.title && (
            <span className="text-red-500">{errors.title.message}</span>
          )}
        </div>
        <div>
          <Input {...register("location")} placeholder="Location" />
          {errors.location && (
            <span className="text-red-500">{errors.location.message}</span>
          )}
        </div>
        <Controller
          name="status"
          control={control}
          defaultValue=""
          render={({ field }) => (
            <div>
              <Select onValueChange={field.onChange} value={field.value}>
                <SelectTrigger>
                  <SelectValue placeholder="Select Status" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="Applied">Applied</SelectItem>
                  <SelectItem value="Interviewing">Interviewing</SelectItem>
                  <SelectItem value="Offer">Offer</SelectItem>
                  <SelectItem value="Rejected">Rejected</SelectItem>
                </SelectContent>
              </Select>
              {errors.status && (
                <span className="text-red-500">{errors.status.message}</span>
              )}
            </div>
          )}
        />
        <div className="col-span-2 text-right">
          <Button type="submit">Save Job</Button>
        </div>
      </form>
    </div>
  );
}

export default JobForm;
