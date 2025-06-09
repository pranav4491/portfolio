type SectionWrapperProps = {
  children: React.ReactNode;
};

export default function SectionWrapper({ children }: SectionWrapperProps) {
  return (
    <section className="min-h-screen bg-black text-white flex items-center justify-center">
      {children}
    </section>
  );
}
