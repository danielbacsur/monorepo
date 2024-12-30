"use client";

import Image from "next/image";
import React, { useEffect, useState } from "react";

export function MasonryGallery({
  images,
}: {
  images: { src: string; alt: string }[];
}) {
  const [columns, setColumns] = useState<{ src: string; alt: string }[][]>([]);

  useEffect(() => {
    const columnsArray: { src: string; alt: string }[][] = Array.from(
      { length: 2 },
      () => []
    );
    images.forEach((image, index) => {
      columnsArray[index % 2].push(image);
    });
    setColumns(columnsArray);
  }, [images]);

  return (
    <div className="flex gap-4 my-8">
      {columns.map((column, i) => (
        <div key={i} className="flex flex-col gap-4 flex-1">
          {column.map((image, j) => (
            <Image
              key={j}
              width={480}
              height={480}
              src={image.src}
              alt={image.alt}
              className="w-full rounded-md"
            />
          ))}
        </div>
      ))}
    </div>
  );
}
