const tags = ["Easy Apply", "Part-Time", "Costume Service", "Delivery Driver", "Nurse", "Waiter", "Babysitter", "Cleaner", "Mechanic", "Electrician"];

const CategoryTags = () => {
  return (
    <div className="container mx-auto flex flex-wrap justify-center gap-3 px-4 mb-12">
      {tags.map(tag => (
        <button key={tag} className="px-4 py-2 border rounded-full text-sm hover:bg-blue-50">{tag}</button>
      ))}
    </div>
  );
};
