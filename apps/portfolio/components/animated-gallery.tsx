"use client";

import { useRef } from "react";
import Image from "next/image";
import { motion, useInView } from "framer-motion";
import { cn } from "@/utils/cn";

export function AnimatedGallery({
  images,
}: {
  images: { src: string; description: string, focus: string }[];
}) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.5 });

  return (
    <section ref={ref} className="py-12 px-4 overflow-hidden">
      <div className="max-w-5xl mx-auto">
        <div className="flex flex-wrap justify-center gap-4 lg:gap-8">
          {images.map(({ src, description, focus }, index) => (
            <motion.div
              key={src + index}
              className="flex flex-col w-full sm:w-1/2 lg:w-1/4 max-w-[300px]"
              initial={{ y: "100%", rotate: index % 2 === 0 ? 15 : -15 }}
              animate={isInView ? { y: 0, rotate: 0 } : {}}
              transition={{
                duration: 0.8,
                delay: index * 0.1,
                ease: [0.215, 0.61, 0.355, 1],
              }}
            >
              <div className="aspect-square relative mb-2">
                <Image
                  src={src}
                  alt={description}
                  fill
                  className={cn("object-cover", focus)}
                />
              </div>
              <motion.p
                className="text-sm text-white/60"
                initial={{ opacity: 0 }}
                animate={isInView ? { opacity: 1 } : {}}
                transition={{ delay: (index + images.length) * 0.1 }}
              >
                {description}
              </motion.p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
