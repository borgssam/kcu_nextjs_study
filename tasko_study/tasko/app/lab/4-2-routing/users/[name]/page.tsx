interface UserPageProps {
  params: Promise<{name:string}>;
}

export default async function UserPage({params}: UserPageProps){
  const {name} = await params; 
  return <h1 className="p-8 text-2xl">{name}님 안녕하세요</h1>
}

