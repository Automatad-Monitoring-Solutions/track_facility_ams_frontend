import React from 'react';

const dashboardData = [
  { имя: 'Алиса', должность: 'Инженер', локация: 'Штаб', время: '8:00', длительность: '8ч' },
  { имя: 'Боб', должность: 'Дизайнер', локация: 'Лаборатория', время: '8:30', длительность: '7.5ч' },
  { имя: 'Чарли', должность: 'ПМ', локация: 'Фабрика', время: '9:00', длительность: '7ч' },
  { имя: 'Дэвид', должность: 'Продажи', локация: 'Офис', время: '9:30', длительность: '6.5ч' },
  { имя: 'Ева', должность: 'Операции', локация: 'Склад', время: '10:00', длительность: '6ч' },
  { имя: 'Фрэнк', должность: 'Поддержка', локация: 'Штаб', время: '10:30', длительность: '5.5ч' }
];

export default function Dashboard() {
  return (
    <div className="min-h-screen bg-zinc-950 text-white p-6">
      <header className="flex justify-between items-center mb-6">
        <h1 className="text-3xl font-bold">Панель управления</h1>
        <nav className="flex gap-6 text-sm text-gray-400">
          <a href="#" className="hover:text-white">Отчёты</a>
          <a href="#" className="hover:text-white">Сотрудники</a>
          <a href="#" className="hover:text-white">Объекты</a>
          <a href="#" className="hover:text-white">Настройки</a>
        </nav>
      </header>

      <section className="mb-8">
        <h2 className="text-xl font-semibold mb-4">Сегодня</h2>
        <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
          {['Штаб', 'Лаборатория', 'Фабрика', 'Офис', 'Склад'].map((place, index) => (
            <div
              key={index}
              className="border border-zinc-800 rounded-lg p-4 text-center hover:bg-zinc-900"
            >
              <div className="text-xl mb-1">📍</div>
              <div className="font-semibold">{place}</div>
              <div className="text-sm text-gray-400">
                {dashboardData.filter(d => d.локация === place).length} человек(а)
              </div>
            </div>
          ))}
        </div>
      </section>

      <section>
        <h2 className="text-xl font-semibold mb-4">За последние 24 часа</h2>
        <div className="overflow-x-auto">
          <table className="w-full table-auto border-collapse border border-zinc-800 text-sm">
            <thead className="bg-zinc-900 text-gray-300">
              <tr>
                <th className="border border-zinc-800 px-4 py-2">Имя</th>
                <th className="border border-zinc-800 px-4 py-2">Должность</th>
                <th className="border border-zinc-800 px-4 py-2">Локация</th>
                <th className="border border-zinc-800 px-4 py-2">Время входа</th>
                <th className="border border-zinc-800 px-4 py-2">Длительность</th>
              </tr>
            </thead>
            <tbody>
              {dashboardData.map((entry, index) => (
                <tr key={index} className="hover:bg-zinc-800">
                  <td className="border border-zinc-800 px-4 py-2">{entry.имя}</td>
                  <td className="border border-zinc-800 px-4 py-2">{entry.должность}</td>
                  <td className="border border-zinc-800 px-4 py-2">{entry.локация}</td>
                  <td className="border border-zinc-800 px-4 py-2">{entry.время}</td>
                  <td className="border border-zinc-800 px-4 py-2">{entry.длительность}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      <footer className="mt-12 text-center text-sm text-gray-500 space-x-4">
        <span>Документация</span>
        <span>API</span>
        <span>Интеграции</span>
        <span>Статус</span>
        <span>Поддержка</span>
        <div className="mt-2">©2023 AMS</div>
      </footer>
    </div>
  );
}
