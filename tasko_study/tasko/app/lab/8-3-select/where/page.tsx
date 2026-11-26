import { db } from "@/lib/db";
import ResultTable from "../result-table";

export const dynamic = "force-dynamic";

export default async function WherePage(){
  const q1 = db.selectFrom("lab_tasks").select(["id","title","status"]).where("status","=", "done");
  const c1 = q1.compile();


  const q2 = db.selectFrom("lab_tasks").select(["id","title","assignee"]).where("assignee","in", ["김민수", "이지은"]);
  const c2 = q2.compile();

  const q3 = db.selectFrom("lab_tasks").select(["id","title"]).where("title","like", "%복습%");
  const c3 = q3.compile();


  const q4 = db
  .selectFrom("lab_tasks")
  .select(["id","title","status", "assignee"])
  .where("status","=","doing")
  .where("assignee","=","보그쌤") //and조건
  const c4 = q4.compile();


  const q5 = db
  .selectFrom("lab_tasks")
  .select(["id","title","created_at"])
  .orderBy("created_at","asc")
  .orderBy("id", "desc")
  const c5 = q5.compile();

  return (

    <div>
      <p>조건, 정렬, 개수(limite)</p>
      <ResultTable title="1." sql={c1.sql} parameters={c1.parameters} rows={await q1.execute()}/>
      <ResultTable title="2." sql={c2.sql} parameters={c2.parameters} rows={await q2.execute()}/>
      <ResultTable title="3." sql={c3.sql} parameters={c3.parameters} rows={await q3.execute()}/>
      <ResultTable title="4." sql={c4.sql} parameters={c4.parameters} rows={await q4.execute()}/>
      <ResultTable title="5." sql={c5.sql} parameters={c5.parameters} rows={await q5.execute()}/>
      <br/> <br/> < br/>
    </div>
  )

}