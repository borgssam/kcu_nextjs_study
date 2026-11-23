import SiteHeader from "@/components/SiteHeader";

export default function LabLayout({ children }: LayoutProps<"/">) {
  return (
    <>
    
      <SiteHeader/>
      {children}
    </>


  );
}