import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { supabase } from '../supabase/supabaseClient' // ⚠️ проверь путь

export default function Login() {
  const navigate = useNavigate()
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [rememberMe, setRememberMe] = useState(false)
  const [error, setError] = useState<string | null>(null)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setError(null)

    const { error } = await supabase.auth.signInWithPassword({
      email,
      password,
    })

    if (error) {
      setError(error.message)
    } else {
      console.log('✅ Вход выполнен!')
      navigate('/dashboard') // или куда нужно
    }
  }

  return (
    <div className="min-h-screen bg-zinc-950 text-white flex flex-col">
      {/* Navbar (можно добавить логотип сюда, если нужно) */}
      <header className="border-b border-zinc-800 px-6 py-4 flex items-center" />

      {/* Main Form */}
      <main className="flex-grow flex items-center justify-center px-4">
        <div className="w-full max-w-md space-y-6">
          {/* Заголовок и логотип */}
          <div className="text-center space-y-2">
            <h1 className="text-2xl font-bold flex items-center justify-center gap-2">
              Войдите в
              <img
                src="/assets/ams.png"
                alt="AMS Logo"
                className="h-6 sm:h-7 md:h-8 object-contain"
              />
            </h1>
            <p className="text-sm text-gray-400">
              Используйте свои учетные данные для входа. Если вы новый пользователь, сначала создайте аккаунт.
            </p>
          </div>

          {/* Ошибка */}
          {error && <p className="text-red-500 text-sm text-center">{error}</p>}

          {/* Форма входа */}
          <form onSubmit={handleSubmit} className="space-y-4">
            <input
              id="email"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="example@company.com"
              className="w-full px-4 py-2 rounded-md bg-zinc-800 border border-zinc-700 text-sm placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
            <input
              id="password"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Пароль"
              className="w-full px-4 py-2 rounded-md bg-zinc-800 border border-zinc-700 text-sm placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
            <div className="flex items-center">
              <input
                id="remember"
                type="checkbox"
                checked={rememberMe}
                onChange={(e) => setRememberMe(e.target.checked)}
                className="mr-2 accent-blue-500"
              />
              <label htmlFor="remember" className="text-sm">
                Запомнить меня
              </label>
            </div>
            <button
              type="submit"
              className="w-full py-2 rounded-md bg-blue-600 hover:bg-blue-700 font-medium text-sm"
            >
              Войти
            </button>
          </form>

          {/* Кнопка SSO */}
          <div className="text-center text-gray-400 text-sm">или</div>
          <button className="w-full py-2 rounded-md bg-zinc-800 border border-zinc-700 hover:bg-zinc-700 text-sm flex justify-center items-center gap-2">
            <span className="text-lg">→</span> Войти через SSO
          </button>

          {/* Ссылка на регистрацию */}
          <p className="text-center text-sm text-gray-400">
            Впервые в AMS?{' '}
            <a href="/register" className="text-blue-400 hover:underline">
              Зарегистрироваться
            </a>
          </p>
        </div>
      </main>
    </div>
  )
}
