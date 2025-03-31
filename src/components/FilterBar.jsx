import { Button } from "@/components/ui/button";

const filters = ["All", "Applied", "Interviewing", "Offer", "Rejected"];

function FilterBar({ current, setFilter }) {
  return (
    <div className="flex gap-2 max-w-4xl mx-auto mb-6">
      {filters.map((status) => (
        <Button
          key={status}
          variant={current === status ? "default" : "outline"}
          onClick={() => setFilter(status)}
        >
          {status}
        </Button>
      ))}
    </div>
  );
}

export default FilterBar;
