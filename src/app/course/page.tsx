"use client";

import { useSession } from "next-auth/react";
import Image from "next/image";
import React from 'react'

const Course = () => {
  return (
    <div className="px-5 sm:px-10 md:px-16 lg:px-20 py-10 lg:m-20">
      <main className="max-w-4xl mx-auto">
        <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold px-2 sm:px-5">
          Learning Green Software<br /> Development Principles
        </h1>

        <h1 className="text-2xl md:text-3xl text-[--highlight] font-sans px-2 sm:px-5 pb-10 md:pb-16 pt-5 md:pt-7">
          EcoBit
        </h1>

        <h2 className="text-lg md:text-xl text-[--foreground] mt-4 max-w-2xl">
          Discover sustainable coding practices that reduce energy consumption, optimize performance,
          and build eco-friendly software solutions for a better future.
        </h2>
        <article className="">
          <h3 className=" text-lg font-bold md:text-xl text-[--foreground] mt-20 max-w-2xl">
            And here you will have a lot of reading about the course materials.
          </h3>
          <br/>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean sed tortor eget sapien bibendum volutpat eget sed nulla. Cras commodo congue posuere. Ut urna leo, rhoncus eu rhoncus ut, sollicitudin eget nibh. Vivamus accumsan, ante sit amet volutpat aliquam, elit metus mollis lectus, a pellentesque tellus arcu et urna. Ut ornare nisi non cursus euismod. Praesent eu turpis justo. Praesent dictum varius scelerisque. Proin vel convallis ipsum. Cras at ultrices tellus, sit amet volutpat odio. Etiam lacinia suscipit risus, vel gravida dui pharetra ac. Maecenas diam enim, suscipit a lectus vitae, finibus tristique felis. Donec quis accumsan augue. Praesent convallis tellus ipsum, non viverra nunc vehicula sit amet.
          </p>
          <br />
          <Image
            src={"/logo-dark.png"}
            width={300}
            height={300}
            alt="Sample image of a course"
          ></Image>
          <p>Fusce leo mauris, porttitor non purus vel, placerat tempor massa. In erat sapien, tempus et feugiat eu, imperdiet at libero. Aliquam tempus imperdiet ipsum, et vulputate augue hendrerit eu. Nam lacinia justo vel laoreet ultricies. Praesent pretium tortor purus, at porta tellus pulvinar nec. Pellentesque porta, mi vitae imperdiet vestibulum, enim quam suscipit purus, eget pulvinar nisi erat a ligula. Donec at auctor velit, vel aliquet dolor. Vivamus luctus efficitur sapien quis commodo. Integer sit amet ullamcorper diam. Integer porta ac dui a bibendum.
          </p>
        </article>
      </main>
    </div>
  );
};

export default Course;
