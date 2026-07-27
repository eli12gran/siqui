"use client"

import { useEffect, useState } from "react"
import { PieChart, Pie, Cell, ResponsiveContainer, Tooltip, Legend } from "recharts"
import { useInView } from "react-intersection-observer"
import type { ChartDatum } from "@/lib/data/editions/types"
import { cn } from "@/lib/utils"

type PieChartCardProps = {
  title: string
  data: ChartDatum[]
  colors: string[]
  outerRadius: number
  legendHeight: number
  wrapperClassName?: string
}

export function PieChartCard({
  title,
  data,
  colors,
  outerRadius,
  legendHeight,
  wrapperClassName,
}: PieChartCardProps) {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.3,
  })

  const [shouldRender, setShouldRender] = useState(false)

  useEffect(() => {
    if (inView) {
      setShouldRender(true)
    }
  }, [inView])

  return (
    <div ref={ref} className={cn("rounded-lg border p-6 mx-auto w-full", wrapperClassName)}>
      <h4 className="font-bold mb-4 text-center">{title}</h4>
      <div className="w-full h-[400px]">
        {shouldRender && (
          <ResponsiveContainer width="100%" height="100%">
            <PieChart>
              <Pie
                data={data}
                cx="50%"
                cy="50%"
                outerRadius={outerRadius}
                dataKey="value"
                labelLine={false}
                label={({ percent }) => `${(percent * 100).toFixed(1)}%`}
                isAnimationActive={true}
              >
                {data.map((entry, index) => (
                  <Cell key={index} fill={colors[index % colors.length]} />
                ))}
              </Pie>
              <Tooltip formatter={(value: number) => `${value}%`} />
              <Legend verticalAlign="bottom" height={legendHeight} />
            </PieChart>
          </ResponsiveContainer>
        )}
      </div>
    </div>
  )
}
