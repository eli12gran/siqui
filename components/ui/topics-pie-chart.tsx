'use client';

import { PieChart, Pie, Cell, ResponsiveContainer, Tooltip, Legend } from 'recharts';
import { useInView } from 'react-intersection-observer';
import { useEffect, useState } from 'react';

const attendeeData = [
  { name: 'Química Ambiental y Sostenibilidad', value: 28 },
  { name: 'Productos Naturales y Alimentos', value: 13.7 },
  { name: 'Simulaciones Computacionales', value: 8.8 },
  { name: 'Enseñanza de la Química', value: 13.7 },
  { name: 'Química de Materiales ', value: 13.7 },
  { name: 'Otro', value: 7.7 },
];

const COLORS = [
  "#285c4a", "#53b268", "#83db78",
  "#5dd17a", "#0d0630", "#8eb897", "#9ddbad"
];

export default function TopicsChart() {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.3,
  });

  const [shouldRender, setShouldRender] = useState(false);

  useEffect(() => {
    if (inView) {
      setShouldRender(true);
    }
  }, [inView]);

  return (
    <div ref={ref} className="rounded-lg border p-6 max-w-5xl mx-auto w-full">
      <h4 className="font-bold mb-4 text-center">Distribución Líneas Temáticas</h4>
      <div className="w-full h-[400px]">
        {shouldRender && (
          <ResponsiveContainer width="100%" height="100%">
            <PieChart>
              <Pie
                data={attendeeData}
                cx="50%"
                cy="50%"
                outerRadius={110}
                dataKey="value"
                labelLine={false}
                label={({ name, percent }) => `${(percent * 100).toFixed(1)}%`}
                isAnimationActive={true}
              >
                {attendeeData.map((entry, index) => (
                  <Cell key={index} fill={COLORS[index % COLORS.length]} />
                ))}
              </Pie>
              <Tooltip formatter={(value: number) => `${value}%`} />
              <Legend verticalAlign="bottom" height={0} />
            </PieChart>
          </ResponsiveContainer>
        )}
      </div>
    </div>
  );
}
