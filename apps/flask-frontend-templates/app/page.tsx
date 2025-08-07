import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ArrowRight, Shield, Zap, Users, Star, Menu } from 'lucide-react'
import Link from "next/link"

export default function HomePage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-green-900 to-slate-900">
      {/* Header */}
      <header className="border-b border-green-800/30 bg-slate-900/50 backdrop-blur-sm">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-gradient-to-r from-green-400 to-green-600 rounded-lg"></div>
              <span className="text-xl font-bold text-white">SuperVibeCoder3000</span>
            </div>
            <nav className="hidden md:flex items-center space-x-6">
              <Link href="#features" className="text-green-100 hover:text-green-400 transition-colors">
                Возможности
              </Link>
              <Link href="#pricing" className="text-green-100 hover:text-green-400 transition-colors">
                Цены
              </Link>
              <Link href="#about" className="text-green-100 hover:text-green-400 transition-colors">
                О нас
              </Link>
              <Link href="/auth">
                <Button variant="outline" className="border-green-600 text-green-400 hover:bg-green-600 hover:text-white">
                  Войти
                </Button>
              </Link>
            </nav>
            <Button variant="ghost" size="icon" className="md:hidden text-green-100">
              <Menu className="h-6 w-6" />
            </Button>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto text-center">
          <Badge className="mb-6 bg-green-900/50 text-green-300 border-green-700">
            Новая версия 2.0 уже доступна
          </Badge>
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
            Современное решение для
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-green-600">
              {' '}вашего бизнеса
            </span>
          </h1>
          <p className="text-xl text-green-100 mb-8 max-w-2xl mx-auto">
            Мощная платформа для управления проектами с интуитивным интерфейсом 
            и передовыми технологиями
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-gradient-to-r from-green-600 to-green-700 hover:from-green-700 hover:to-green-800">
              Начать бесплатно
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            <Button size="lg" variant="outline" className="border-green-600 text-green-400 hover:bg-green-600 hover:text-white">
              Смотреть демо
            </Button>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-20 px-4">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Почему выбирают нас
            </h2>
            <p className="text-green-100 text-lg max-w-2xl mx-auto">
              Наша платформа предоставляет все необходимые инструменты для успешного ведения бизнеса
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="bg-slate-800/50 border-green-800/30 backdrop-blur-sm">
              <CardHeader>
                <Shield className="h-12 w-12 text-green-400 mb-4" />
                <CardTitle className="text-white">Безопасность</CardTitle>
                <CardDescription className="text-green-100">
                  Надежная защита данных с использованием современных протоколов шифрования
                </CardDescription>
              </CardHeader>
            </Card>
            <Card className="bg-slate-800/50 border-green-800/30 backdrop-blur-sm">
              <CardHeader>
                <Zap className="h-12 w-12 text-green-400 mb-4" />
                <CardTitle className="text-white">Производительность</CardTitle>
                <CardDescription className="text-green-100">
                  Молниеносная скорость работы благодаря оптимизированной архитектуре
                </CardDescription>
              </CardHeader>
            </Card>
            <Card className="bg-slate-800/50 border-green-800/30 backdrop-blur-sm">
              <CardHeader>
                <Users className="h-12 w-12 text-green-400 mb-4" />
                <CardTitle className="text-white">Командная работа</CardTitle>
                <CardDescription className="text-green-100">
                  Эффективное сотрудничество в команде с инструментами для совместной работы
                </CardDescription>
              </CardHeader>
            </Card>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 px-4 bg-slate-900/50">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-4xl font-bold text-green-400 mb-2">10K+</div>
              <div className="text-green-100">Активных пользователей</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-green-400 mb-2">99.9%</div>
              <div className="text-green-100">Время работы</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-green-400 mb-2">50+</div>
              <div className="text-green-100">Стран</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-green-400 mb-2">24/7</div>
              <div className="text-green-100">Поддержка</div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-4 border-t border-green-800/30">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <div className="w-8 h-8 bg-gradient-to-r from-green-400 to-green-600 rounded-lg"></div>
                <span className="text-xl font-bold text-white">SuperVibeCoder3000</span>
              </div>
              <p className="text-green-100">
                Новая замена CursorAI
              </p>
            </div>
            <div>
              <h3 className="text-white font-semibold mb-4">Продукт</h3>
              <ul className="space-y-2 text-green-100">
                <li><Link href="#" className="hover:text-green-400">Возможности</Link></li>
                <li><Link href="#" className="hover:text-green-400">Цены</Link></li>
                <li><Link href="#" className="hover:text-green-400">API</Link></li>
              </ul>
            </div>
            <div>
              <h3 className="text-white font-semibold mb-4">Компания</h3>
              <ul className="space-y-2 text-green-100">
                <li><Link href="#" className="hover:text-green-400">О нас</Link></li>
                <li><Link href="#" className="hover:text-green-400">Карьера</Link></li>
                <li><Link href="#" className="hover:text-green-400">Контакты</Link></li>
              </ul>
            </div>
            <div>
              <h3 className="text-white font-semibold mb-4">Поддержка</h3>
              <ul className="space-y-2 text-green-100">
                <li><Link href="#" className="hover:text-green-400">Документация</Link></li>
                <li><Link href="#" className="hover:text-green-400">Помощь</Link></li>
                <li><Link href="#" className="hover:text-green-400">Статус</Link></li>
              </ul>
            </div>
          </div>
          <div className="border-t border-green-800/30 mt-8 pt-8 text-center text-green-100">
            <p>&copy; 2027 SuperVibeCoder3000. Все права защищены.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
