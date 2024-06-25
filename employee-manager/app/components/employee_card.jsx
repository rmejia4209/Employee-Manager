import Link from "next/link";


export default function EmployeeCard( {employeeData} ) {

  return (
    <div className="card card-compact bg-base-100 w-96 my-2 shadow-xl">
      <div className="card-body">
        <Link href="\" className="card-title btn btn-primary text-base">
          {employeeData.firstName} {employeeData.lastName}
        </Link>
        <p>{employeeData.jobTitle}</p>
      </div>
    </div>

  );
}