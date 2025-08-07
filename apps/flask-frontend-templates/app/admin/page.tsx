"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Users, Settings, BarChart3, Shield, Search, MoreHorizontal, Plus, Edit, Trash2, Eye, UserPlus, Database, Activity, TrendingUp, AlertTriangle } from 'lucide-react'
import Link from "next/link"

export default function AdminPage() {
  const [searchTerm, setSearchTerm] = useState("")

  const users = [
    { id: 1, name: "Иван Иванов", email: "ivan@example.com", role: "Пользователь", status: "Активен", lastLogin: "2 часа назад" },
    { id: 2, name: "Мария Петрова", email: "maria@example.com", role: "Модератор", status: "Активен", lastLogin: "1 день назад" },
    { id: 3, name: "Алексей Сидоров", email: "alex@example.com", role: "Пользователь", status: "Заблокирован", lastLogin: "1 неделю назад" },
    { id: 4, name: "Елена Козлова", email: "elena@example.com", role: "Пользователь", status: "Активен", lastLogin: "3 часа назад" },
  ]

  const projects = [
    { id: 1, name: "Веб-сайт компании", owner: "Иван Иванов", status: "В работе", created: "15.01.2024" },
    { id: 2, name: "Мобильное приложение", owner: "Мария Петрова", status: "Завершен", created: "10.01.2024" },
    { id: 3, name: "API сервис", owner: "Алексей Сидоров", status: "Приостановлен", created: "08.01.2024" },
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-green-900 to-slate-900">
      {/* Header */}
      <header className="border-b border-green-800/30 bg-slate-900/50 backdrop-blur-sm">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <Link href="/" className="flex items-center space-x-2">
                <div className="w-8 h-8 bg-gradient-to-r from-green-400 to-green-600 rounded-lg"></div>
                <span className="text-xl font-bold text-white">GreenApp</span>
              </Link>
              <Badge className="bg-red-900/50 text-red-300 border-red-700">
                Админ панель
              </Badge>
            </div>
            <div className="flex items-center space-x-4">
              <Avatar>
                <AvatarImage src="/placeholder.svg?height=32&width=32" />
                <AvatarFallback className="bg-green-600 text-white">АД</AvatarFallback>
              </Avatar>
              <span className="text-white font-medium">Администратор</span>
            </div>
          </div>
        </div>
      </header>

      <div className="container mx-auto px-4 py-8">
        {/* Stats Overview */}
        <div className="grid md:grid-cols-4 gap-6 mb-8">
          <Card className="bg-slate-800/50 border-green-800/30 backdrop-blur-sm">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium text-green-100">
                Всего пользователей
              </CardTitle>
              <Users className="h-4 w-4 text-green-400" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-white">1,234</div>
              <p className="text-xs text-green-300">
                +12% за месяц
              </p>
            </CardContent>
          </Card>
          <Card className="bg-slate-800/50 border-green-800/30 backdrop-blur-sm">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium text-green-100">
                Активных проектов
              </CardTitle>
              <Database className="h-4 w-4 text-green-400" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-white">89</div>
              <p className="text-xs text-green-300">
                +5 за неделю
              </p>
            </CardContent>
          </Card>
          <Card className="bg-slate-800/50 border-green-800/30 backdrop-blur-sm">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium text-green-100">
                Системная нагрузка
              </CardTitle>
              <Activity className="h-4 w-4 text-green-400" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-white">67%</div>
              <p className="text-xs text-green-300">
                Нормальная
              </p>
            </CardContent>
          </Card>
          <Card className="bg-slate-800/50 border-green-800/30 backdrop-blur-sm">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium text-green-100">
                Доходы
              </CardTitle>
              <TrendingUp className="h-4 w-4 text-green-400" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-white">₽45,231</div>
              <p className="text-xs text-green-300">
                +20% за месяц
              </p>
            </CardContent>
          </Card>
        </div>

        {/* Main Content */}
        <Tabs defaultValue="users" className="w-full">
          <TabsList className="grid w-full grid-cols-4 bg-slate-700/50">
            <TabsTrigger value="users" className="data-[state=active]:bg-green-600 data-[state=active]:text-white">
              Пользователи
            </TabsTrigger>
            <TabsTrigger value="projects" className="data-[state=active]:bg-green-600 data-[state=active]:text-white">
              Проекты
            </TabsTrigger>
            <TabsTrigger value="analytics" className="data-[state=active]:bg-green-600 data-[state=active]:text-white">
              Аналитика
            </TabsTrigger>
            <TabsTrigger value="settings" className="data-[state=active]:bg-green-600 data-[state=active]:text-white">
              Настройки
            </TabsTrigger>
          </TabsList>

          <TabsContent value="users" className="space-y-6 mt-6">
            <Card className="bg-slate-800/50 border-green-800/30 backdrop-blur-sm">
              <CardHeader>
                <div className="flex items-center justify-between">
                  <div>
                    <CardTitle className="text-white">Управление пользователями</CardTitle>
                    <CardDescription className="text-green-100">
                      Просмотр и управление учетными записями пользователей
                    </CardDescription>
                  </div>
                  <Button className="bg-gradient-to-r from-green-600 to-green-700 hover:from-green-700 hover:to-green-800">
                    <UserPlus className="h-4 w-4 mr-2" />
                    Добавить пользователя
                  </Button>
                </div>
                <div className="flex items-center space-x-2">
                  <div className="relative flex-1 max-w-sm">
                    <Search className="absolute left-2 top-2.5 h-4 w-4 text-green-400" />
                    <Input
                      placeholder="Поиск пользователей..."
                      value={searchTerm}
                      onChange={(e) => setSearchTerm(e.target.value)}
                      className="pl-8 bg-slate-700/50 border-green-800/30 text-white"
                    />
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <Table>
                  <TableHeader>
                    <TableRow className="border-green-800/30">
                      <TableHead className="text-green-100">Пользователь</TableHead>
                      <TableHead className="text-green-100">Роль</TableHead>
                      <TableHead className="text-green-100">Статус</TableHead>
                      <TableHead className="text-green-100">Последний вход</TableHead>
                      <TableHead className="text-green-100">Действия</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {users.map((user) => (
                      <TableRow key={user.id} className="border-green-800/30">
                        <TableCell className="font-medium">
                          <div className="flex items-center space-x-3">
                            <Avatar className="h-8 w-8">
                              <AvatarImage src={`/placeholder-32px.png?height=32&width=32`} />
                              <AvatarFallback className="bg-green-600 text-white text-xs">
                                {user.name.split(' ').map(n => n[0]).join('')}
                              </AvatarFallback>
                            </Avatar>
                            <div>
                              <div className="text-white">{user.name}</div>
                              <div className="text-green-300 text-sm">{user.email}</div>
                            </div>
                          </div>
                        </TableCell>
                        <TableCell>
                          <Badge variant={user.role === 'Модератор' ? 'default' : 'secondary'} 
                                 className={user.role === 'Модератор' ? 'bg-green-600' : 'bg-slate-600'}>
                            {user.role}
                          </Badge>
                        </TableCell>
                        <TableCell>
                          <Badge variant={user.status === 'Активен' ? 'default' : 'destructive'}
                                 className={user.status === 'Активен' ? 'bg-green-600' : 'bg-red-600'}>
                            {user.status}
                          </Badge>
                        </TableCell>
                        <TableCell className="text-green-100">{user.lastLogin}</TableCell>
                        <TableCell>
                          <DropdownMenu>
                            <DropdownMenuTrigger asChild>
                              <Button variant="ghost" className="h-8 w-8 p-0 text-green-100">
                                <MoreHorizontal className="h-4 w-4" />
                              </Button>
                            </DropdownMenuTrigger>
                            <DropdownMenuContent align="end" className="bg-slate-800 border-green-800/30">
                              <DropdownMenuLabel className="text-green-100">Действия</DropdownMenuLabel>
                              <DropdownMenuItem className="text-green-100 hover:bg-green-600">
                                <Eye className="mr-2 h-4 w-4" />
                                Просмотр
                              </DropdownMenuItem>
                              <DropdownMenuItem className="text-green-100 hover:bg-green-600">
                                <Edit className="mr-2 h-4 w-4" />
                                Редактировать
                              </DropdownMenuItem>
                              <DropdownMenuSeparator className="bg-green-800/30" />
                              <DropdownMenuItem className="text-red-400 hover:bg-red-600 hover:text-white">
                                <Trash2 className="mr-2 h-4 w-4" />
                                Удалить
                              </DropdownMenuItem>
                            </DropdownMenuContent>
                          </DropdownMenu>
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="projects" className="space-y-6 mt-6">
            <Card className="bg-slate-800/50 border-green-800/30 backdrop-blur-sm">
              <CardHeader>
                <div className="flex items-center justify-between">
                  <div>
                    <CardTitle className="text-white">Управление проектами</CardTitle>
                    <CardDescription className="text-green-100">
                      Просмотр и управление всеми проектами в системе
                    </CardDescription>
                  </div>
                  <Button className="bg-gradient-to-r from-green-600 to-green-700 hover:from-green-700 hover:to-green-800">
                    <Plus className="h-4 w-4 mr-2" />
                    Новый проект
                  </Button>
                </div>
              </CardHeader>
              <CardContent>
                <Table>
                  <TableHeader>
                    <TableRow className="border-green-800/30">
                      <TableHead className="text-green-100">Название</TableHead>
                      <TableHead className="text-green-100">Владелец</TableHead>
                      <TableHead className="text-green-100">Статус</TableHead>
                      <TableHead className="text-green-100">Создан</TableHead>
                      <TableHead className="text-green-100">Действия</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {projects.map((project) => (
                      <TableRow key={project.id} className="border-green-800/30">
                        <TableCell className="font-medium text-white">{project.name}</TableCell>
                        <TableCell className="text-green-100">{project.owner}</TableCell>
                        <TableCell>
                          <Badge variant={
                            project.status === 'В работе' ? 'default' : 
                            project.status === 'Завершен' ? 'secondary' : 'destructive'
                          } className={
                            project.status === 'В работе' ? 'bg-blue-600' : 
                            project.status === 'Завершен' ? 'bg-green-600' : 'bg-yellow-600'
                          }>
                            {project.status}
                          </Badge>
                        </TableCell>
                        <TableCell className="text-green-100">{project.created}</TableCell>
                        <TableCell>
                          <DropdownMenu>
                            <DropdownMenuTrigger asChild>
                              <Button variant="ghost" className="h-8 w-8 p-0 text-green-100">
                                <MoreHorizontal className="h-4 w-4" />
                              </Button>
                            </DropdownMenuTrigger>
                            <DropdownMenuContent align="end" className="bg-slate-800 border-green-800/30">
                              <DropdownMenuItem className="text-green-100 hover:bg-green-600">
                                <Eye className="mr-2 h-4 w-4" />
                                Просмотр
                              </DropdownMenuItem>
                              <DropdownMenuItem className="text-green-100 hover:bg-green-600">
                                <Edit className="mr-2 h-4 w-4" />
                                Редактировать
                              </DropdownMenuItem>
                              <DropdownMenuSeparator className="bg-green-800/30" />
                              <DropdownMenuItem className="text-red-400 hover:bg-red-600 hover:text-white">
                                <Trash2 className="mr-2 h-4 w-4" />
                                Удалить
                              </DropdownMenuItem>
                            </DropdownMenuContent>
                          </DropdownMenu>
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="analytics" className="space-y-6 mt-6">
            <div className="grid md:grid-cols-2 gap-6">
              <Card className="bg-slate-800/50 border-green-800/30 backdrop-blur-sm">
                <CardHeader>
                  <CardTitle className="text-white">Активность пользователей</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="h-64 flex items-center justify-center text-green-300">
                    График активности пользователей
                  </div>
                </CardContent>
              </Card>
              <Card className="bg-slate-800/50 border-green-800/30 backdrop-blur-sm">
                <CardHeader>
                  <CardTitle className="text-white">Статистика проектов</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="h-64 flex items-center justify-center text-green-300">
                    График статистики проектов
                  </div>
                </CardContent>
              </Card>
            </div>
            <Card className="bg-slate-800/50 border-green-800/30 backdrop-blur-sm">
              <CardHeader>
                <CardTitle className="text-white">Системные уведомления</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {[
                    { type: "warning", message: "Высокая нагрузка на сервер", time: "5 минут назад" },
                    { type: "info", message: "Обновление системы завершено", time: "1 час назад" },
                    { type: "error", message: "Ошибка в модуле аутентификации", time: "2 часа назад" },
                  ].map((notification, index) => (
                    <div key={index} className="flex items-start space-x-3 p-3 rounded-lg bg-slate-700/30">
                      <AlertTriangle className={`h-5 w-5 mt-0.5 ${
                        notification.type === 'error' ? 'text-red-400' :
                        notification.type === 'warning' ? 'text-yellow-400' : 'text-blue-400'
                      }`} />
                      <div className="flex-1">
                        <p className="text-white text-sm">{notification.message}</p>
                        <p className="text-green-300 text-xs">{notification.time}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="settings" className="space-y-6 mt-6">
            <div className="grid md:grid-cols-2 gap-6">
              <Card className="bg-slate-800/50 border-green-800/30 backdrop-blur-sm">
                <CardHeader>
                  <CardTitle className="text-white">Системные настройки</CardTitle>
                  <CardDescription className="text-green-100">
                    Основные параметры системы
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <Button variant="outline" className="w-full justify-start border-green-800/30 text-green-100 hover:bg-green-600 hover:text-white">
                    <Settings className="mr-2 h-4 w-4" />
                    Общие настройки
                  </Button>
                  <Button variant="outline" className="w-full justify-start border-green-800/30 text-green-100 hover:bg-green-600 hover:text-white">
                    <Shield className="mr-2 h-4 w-4" />
                    Безопасность
                  </Button>
                  <Button variant="outline" className="w-full justify-start border-green-800/30 text-green-100 hover:bg-green-600 hover:text-white">
                    <Database className="mr-2 h-4 w-4" />
                    База данных
                  </Button>
                </CardContent>
              </Card>
              <Card className="bg-slate-800/50 border-green-800/30 backdrop-blur-sm">
                <CardHeader>
                  <CardTitle className="text-white">Резервное копирование</CardTitle>
                  <CardDescription className="text-green-100">
                    Управление резервными копиями
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="text-sm text-green-100">
                    Последняя резервная копия: 15.01.2024 в 03:00
                  </div>
                  <Button className="w-full bg-gradient-to-r from-green-600 to-green-700 hover:from-green-700 hover:to-green-800">
                    Создать резервную копию
                  </Button>
                  <Button variant="outline" className="w-full border-green-800/30 text-green-100 hover:bg-green-600 hover:text-white">
                    Восстановить из копии
                  </Button>
                </CardContent>
              </Card>
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  )
}
