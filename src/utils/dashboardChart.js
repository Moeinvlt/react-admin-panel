import Chart from "chart.js/auto";

/**
 * تابع ساخت یا به‌روزرسانی چارت داشبورد
 * @param {HTMLCanvasElement} canvasElement - المنت <canvas> که چارت باید داخلش ساخته شود
 * @param {Array} labels - آرایه‌ای از برچسب‌های محور X
 * @param {Array} datapoints - داده‌های عددی محور Y
 * @returns {Chart} نمونه‌ی چارت ساخته‌شده
 */
export const setDashboardChart = (canvasElement, labels, datapoints) => {
  if (!canvasElement) return null; // اگه المنت وجود نداره، هیچی نساز

  const data = {
    labels,
    datasets: [
      {
        label: "فروش ماه",
        data: datapoints,
        borderColor: "#0062ff",
        backgroundColor: "rgba(0,98,255,0.1)",
        fill: true,
        cubicInterpolationMode: "monotone",
        tension: 0.4,
      },
    ],
  };

  const config = {
    type: "line",
    data,
    options: {
      responsive: true,
      plugins: {
        title: {
          display: true,
          text: "نمودار فروش یک سال گذشته",
        },
      },
      interaction: { intersect: false },
      scales: {
        x: { display: true, title: { display: true, text: "زمان" } },
        y: { display: true, title: { display: true, text: "میلیون تومان" } },
      },
    },
  };

  // ساخت چارت جدید
  const chartInstance = new Chart(canvasElement, config);
  return chartInstance;
};