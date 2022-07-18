export default function Apps({ children }: any) {
  return (
    <div className="max-w-lg pt-10 lg:max-w-none lg:w-7/12 lg:pl-8 xl:w-6/12">
      <div className="grid grid-cols-2 lg:grid-cols-3 text-gray-400 gap-x-12 gap-y-16 [&>a]:transition-opacity pt-28">
        {children}
      </div>
    </div>
  );
}
