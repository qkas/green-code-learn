"use client";
import { useEffect } from 'react';
import { useQuiz } from '@/context/QuizContext';
import CompactQuiz from "@/components/ui/CompactQuiz";
import { questions } from "@/data/questions";

export default function Module2Page() {
  const { setQuizSubmitted } = useQuiz();

  useEffect(() => {
    setQuizSubmitted(false);
  }, [setQuizSubmitted]);

  return (
    <>
      <h1 className="text-4xl font-bold mb-6">Module 2: Cloud Services and Resource Management</h1>

      <h2 className="text-2xl font-bold mt-8 mb-4">Overview</h2>
      <p>
        This module covers strategies for improving software sustainability through efficient use
        of cloud services, memory, data storage, and networking. It emphasizes practices that
        reduce resource waste and energy consumption in distributed computing environments.
      </p>

      <h2 className="text-2xl font-bold mt-8 mb-4">Key Areas</h2>

      <h3 className="text-xl font-semibold mt-6 mb-2">1. Efficient Memory Management</h3>
      <p>
        Optimize garbage collection, reduce memory allocation, and release unused memory quickly.
        Avoid memory leaks and use memory-efficient data structures. Cloud-based testing should be
        optimized to avoid unnecessary consumption.
      </p>
      <img src="/images/module2_memory_management.png" alt="Efficient memory management" className="rounded shadow-md my-4" />

      <h3 className="text-xl font-semibold mt-6 mb-2">2. Avoiding Unnecessary Data Storage</h3>
      <p>
        Store only essential data, clean up obsolete data regularly, and use lightweight data structures.
        Optimized storage saves space and reduces energy required for data transmission and maintenance.
      </p>

      <h3 className="text-xl font-semibold mt-6 mb-2">3. Optimizing Cloud-Based Testing</h3>
      <ul className="list-disc pl-6 mb-4">
        <li>Run only necessary tests</li>
        <li>Select appropriate environments</li>
        <li>Shut down test instances immediately after use</li>
      </ul>
      <img src="/module2_cloud_testing.png" alt="Cloud-based testing optimization" className="rounded shadow-md my-4" />

      <h3 className="text-xl font-semibold mt-6 mb-2">4. Reducing Network Traffic</h3>
      <p>
        Minimize data transmission through optimized data transfer, efficient protocols,
        and avoiding unnecessary exchanges. This reduces load on servers and networking hardware.
      </p>
      <img src="/module2_network_traffic.png" alt="Reducing network traffic" className="rounded shadow-md my-4" />

      <h3 className="text-xl font-semibold mt-6 mb-2">5. Energy-Efficient Database Solutions</h3>
      <p>
        Choose databases that support indexing, caching, and memory-efficient queries.
        Use scalable configurations and shut down idle instances when not in use.
        Lightweight or serverless databases may be suitable for certain use cases.
      </p>

      <h3 className="text-xl font-semibold mt-6 mb-2">6. Impact of Distributed Computing</h3>
      <p>
        Distributed computing can improve performance, but poor resource allocation leads to inefficiency.
        Scale down idle servers and avoid over-provisioning. Smart distribution reduces power usage
        and environmental impact.
      </p>

      <h2 className="text-2xl font-bold mt-8 mb-4">Summary</h2>

      <p>
        Module 2 highlights strategies for reducing energy use in cloud environments and managing
        memory, storage, and networking efficiently. It also covers the importance of scalable,
        energy-aware database configurations and responsible use of distributed computing.
      </p>
      
      <CompactQuiz 
        questions={[questions[1]]} 
        onQuizSubmit={() => setQuizSubmitted(true)}
      />
    </>
  );
}