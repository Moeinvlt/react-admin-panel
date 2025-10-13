import { useEffect, useRef } from "react";
import { setDashboardChart } from "../../utils/dashboardChart";
import Card from "./Card";
import ProductTable from "./ProductTable";

const Dashboard = () => {
  const chartRef = useRef(null);
  const chartInstanceRef = useRef(null); // برای جلوگیری از دوبار ساخت چارت

  useEffect(() => {
    const labels = [
      "فروردین",
      "اردیبهشت",
      "خرداد",
      "تیر",
      "مرداد",
      "شهریور",
      "مهر",
      "آبان",
      "آذر",
      "دی",
      "بهمن",
      "اسفند",
    ];
    const datapoints = [0, 20, 20, 60, 60, 120, 180, 120, 125, 105, 110, 170];

    // فقط وقتی چارت ساخته نشده باشه، بسازش
    if (chartRef.current && !chartInstanceRef.current) {
      chartInstanceRef.current = setDashboardChart(chartRef.current, labels, datapoints);
    }

    // پاک‌سازی هنگام خروج از کامپوننت
    return () => {
      if (chartInstanceRef.current) {
        chartInstanceRef.current.destroy();
        chartInstanceRef.current = null;
      }
    };
  }, []);

  return (
    <div id="dashboard_section" className="dashboard_section main_section">
      <div className="row">

        <Card 
        currentValue={7}
        title="سبد خرید امروز"
        desc="سبد های خرید مانده امروز"
        icon="fas fa-shopping-basket"
        lastWeekValue={13}
        lastMonthValue={18}
        />

        <Card 
        currentValue={8}
        title="سفارشات مانده امروز"
        desc="سفارشات معلق و فاقد پرداختی"
        icon="fas fa-dolly"
        lastWeekValue={9}
        lastMonthValue={16}
        />

        <Card 
        currentValue={45}
        title="سفارشات امروز"
        desc="سفارشات کامل و دارای پرداختی"
        icon="fas fa-luggage-cart"
        lastWeekValue={263}
        lastMonthValue={1038}
        />

        <Card 
        currentValue="1,500,000"
        title="درامد امروز"
        desc="جمع مبالغ پرداختی (تومان)"
        icon="fas fa-money-check-alt"
        lastWeekValue="6,380,000"
        lastMonthValue="22,480,000"
        />

      </div>

      <div className="row">
        <div className="col-12 col-lg-6">
          <p className="text-center mt-3 text-dark">محصولات رو به اتمام</p>

          <ProductTable />
        </div>

        <div className="col-12 col-lg-6">
          <canvas ref={chartRef} height="195"></canvas>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
