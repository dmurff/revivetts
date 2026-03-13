import AddJobForm from "@/app/components/AddJobForm";
import FormFields from "@/app/components/FormFields";

export default async function AddJob() {
  return (
    <div>
      <AddJobForm>
        <FormFields />
      </AddJobForm>
    </div>
  );
}
