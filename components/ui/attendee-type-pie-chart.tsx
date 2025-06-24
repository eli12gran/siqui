'use client';

import { PieChart, Pie, Cell, ResponsiveContainer, Tooltip, Legend } from 'recharts';
import { useInView } from 'react-intersection-observer';
import { useState, useEffect } from 'react';

const attendeeData = [
  { name: 'Estudiante Pregrado', value: 46.2 },
  { name: 'Estudiante Posgrado', value: 17 },
  { name: 'Profesor', value: 15.4 },
  { name: 'Investigador', value: 13.7 },
  { name: 'Otro', value: 7.7 },
];

const COLORS = [
  '#285c4a', '#53b268', '#83db78',
  '#5dd17a', '#0d0630', '#8eb897',
  '#c3e8bd', '#9ddbad', '#bf98a0',
];

export default function AttendeeTypeChart() {
  const { ref, inView } = useInView({
    triggerOnce: true, // only trigger once
    threshold: 0.3,     // 30% visible
  });

  const [shouldRender, setShouldRender] = useState(false);

  useEffect(() => {
    if (inView) {
      setShouldRender(true);
    }
  }, [inView]);

  return (
    <div ref={ref} className="rounded-lg border p-6 max-w-4xl mx-auto w-full">
      <h4 className="font-bold mb-4 text-center">
        Distribución por tipo de participante
      </h4>
      <div className="w-full h-[400px]">
        {shouldRender && (
          <ResponsiveContainer width="100%" height="100%">
            <PieChart>
              <Pie
                data={attendeeData}
                cx="50%"
                cy="50%"
                outerRadius={120}
                dataKey="value"
                labelLine={false}
                label={({ name, percent }) => `${(percent * 100).toFixed(1)}%`}
                isAnimationActive={true}
              >
                {attendeeData.map((entry, index) => (
                  <Cell
                    key={index}
                    fill={COLORS[index % COLORS.length]}
                  />
                ))}
              </Pie>
              <Tooltip formatter={(value: number) => `${value}%`} />
              <Legend verticalAlign="bottom" height={40} />
            </PieChart>
          </ResponsiveContainer>
        )}
      </div>
    </div>
  );
}
