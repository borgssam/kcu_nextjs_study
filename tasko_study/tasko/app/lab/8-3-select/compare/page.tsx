
import Database from "better-sqlite3";
import { db } from "@/lib/db";
import ResultTable from "../result-table";


export const dynamic = "force-dynamic";


export default async function ComparePage() {
  let file = "default.db";
  if(process.env.DATABASE_FILE) {
    file = process.env.DataBASE_FILE;
  }

  const sqlite = new Database(file);
  const allSQL = "SELECT id, title, status FROM lab_tasks WHERE status = ?";
  const allRows = sqlite.prepare(allSQL).all("done") as object[];  //여러줄

  
  const oneSQL = "SELECT id, title, status FROM lab_tasks WHERE id = ?";
  const oneRow = sqlite.prepare(oneSQL).get(2) as object | unknown;  //처음 한건
  const getRows: object[] = [];
  if(oneRow) {
    getRows.push(oneRow);
  }

  sqlite.close();

  const query = db.selectFrom("lab_tasks").select(["id","title"]).where("status","=","done");
  const compiled = query.compile(); //사전에 sql 문법검사-> 명령객체생성
  const kyselyRows = await query.execute();  //데이터베이스에 요청해서 결과를 받기

  
  return (
    <div>
      <ResultTable title="better-sqlite3 all" sql={allSQL} parameters={["done"]} rows={allRows}/>
      <ResultTable title="better-sqlite3 get" sql={oneSQL} parameters={[2]} rows={getRows}/>

      <ResultTable title="kysely" sql={compiled.sql} parameters={compiled.parameters} rows={kyselyRows}/>
    </div>

  )
}