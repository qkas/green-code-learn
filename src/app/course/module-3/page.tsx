export default function Module3Page() {
  return (
    <>
      <h1 className="text-4xl font-bold mb-6">Module 3: General Principles of Sustainability</h1>

      <h2 className="text-2xl font-bold mt-8 mb-4">Overview</h2>
      <p>
        This module explores the broader sustainability principles in software development,
        including clean code practices, ecological web development, energy efficiency across
        programming languages, and sustainable data processing strategies.
      </p>

      <h2 className="text-2xl font-bold mt-8 mb-4">Key Topics</h2>

      <h3 className="text-xl font-semibold mt-6 mb-2">1. Sustainable Software Development</h3>
      <ul className="list-disc pl-6 mb-4">
        <li>Code reviews to eliminate inefficiencies and reduce technical debt</li>
        <li>Favor simple, clear code over complex structures</li>
        <li>Optimize cloud service usage by scaling appropriately and avoiding idle resources</li>
      </ul>

      <h3 className="text-xl font-semibold mt-6 mb-2">2. Ecological Web Development</h3>
      <ul className="list-disc pl-6 mb-4">
        <li>Use green hosting powered by renewable energy</li>
        <li>Compress and lazy-load media to reduce bandwidth</li>
        <li>Design minimalist, low-power websites</li>
      </ul>
      <img src="/module3_lazy_loading.png" alt="Lazy loading example in HTML" className="rounded shadow-md my-4" />

      <h3 className="text-xl font-semibold mt-6 mb-2">3. Energy Consumption of Programming Languages</h3>
      <p>
        Different languages vary in energy efficiency. Low-level languages like C or Rust
        are often more efficient than high-level ones like Python or JavaScript.
        Even within a chosen language, writing optimized, efficient code is key.
      </p>

      <h3 className="text-xl font-semibold mt-6 mb-2">4. Sustainable Data Storage and Processing</h3>
      <ul className="list-disc pl-6 mb-4">
        <li>Remove redundant or outdated data</li>
        <li>Use energy-efficient database technologies with indexing and caching</li>
        <li>Distribute workloads intelligently in distributed systems</li>
      </ul>
      <img src="/module3_sql_cleanup.png" alt="SQL data cleanup example" className="rounded shadow-md my-4" />

      <h3 className="text-xl font-semibold mt-6 mb-2">5. Practical Tips for Green Coding</h3>
      <ul className="list-disc pl-6 mb-4">
        <li>Choose efficient programming languages and frameworks</li>
        <li>Optimize data structures and algorithms (e.g., hash tables, binary search)</li>
        <li>Reduce server resource usage and HTTP requests</li>
        <li>Use modular code and energy-efficient hardware</li>
      </ul>

      <h2 className="text-2xl font-bold mt-8 mb-4">Summary</h2>
      <p>
        Module 3 provides a wide view on sustainable software development, from code clarity
        and ecological web design to programming language choices and energy-conscious databases.
        Practical tips equip developers to reduce software’s environmental impact.
      </p>
    </>
  );
}
