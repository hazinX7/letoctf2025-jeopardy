"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { User, Settings, Bell, LogOut, Activity, TrendingUp, Calendar, FileText, Edit, Save, X } from 'lucide-react'
import Link from "next/link"

export default function DashboardPage() {
  const [isEditing, setIsEditing] = useState(false)

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
              <Badge className="bg-green-900/50 text-green-300 border-green-700">
                Личный кабинет
              </Badge>
            </div>
            <div className="flex items-center space-x-4">
              <Button variant="ghost" size="icon" className="text-green-100 hover:text-green-400">
                <Bell className="h-5 w-5" />
              </Button>
              <Avatar>
                <AvatarImage src="/placeholder.svg?height=32&width=32" />
                <AvatarFallback className="bg-green-600 text-white">ИИ</AvatarFallback>
              </Avatar>
              <Button variant="ghost" size="icon" className="text-green-100 hover:text-red-400">
                <LogOut className="h-5 w-5" />
              </Button>
            </div>
          </div>
        </div>
      </header>

      <div className="container mx-auto px-4 py-8">
        <div className="grid lg:grid-cols-4 gap-8">
          {/* Sidebar */}
          <div className="lg:col-span-1">
            <Card className="bg-slate-800/50 border-green-800/30 backdrop-blur-sm">
              <CardHeader className="text-center">
                <Avatar className="w-20 h-20 mx-auto mb-4">
                  <AvatarImage src="/placeholder.svg?height=80&width=80" />
                  <AvatarFallback className="bg-green-600 text-white text-2xl">ИИ</AvatarFallback>
                </Avatar>
                <CardTitle className="text-white">Иван Иванов</CardTitle>
                <CardDescription className="text-green-100">
                  ivan@example.com
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-2">
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-green-100">Профиль заполнен</span>
                    <span className="text-green-400">85%</span>
                  </div>
                  <Progress value={85} className="bg-slate-700" />
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Main Content */}
          <div className="lg:col-span-3">
            <Tabs defaultValue="overview" className="w-full">
              <TabsList className="grid w-full grid-cols-4 bg-slate-700/50">
                <TabsTrigger value="overview" className="data-[state=active]:bg-green-600 data-[state=active]:text-white">
                  Обзор
                </TabsTrigger>
                <TabsTrigger value="profile" className="data-[state=active]:bg-green-600 data-[state=active]:text-white">
                  Профиль
                </TabsTrigger>
                <TabsTrigger value="activity" className="data-[state=active]:bg-green-600 data-[state=active]:text-white">
                  Активность
                </TabsTrigger>
                <TabsTrigger value="settings" className="data-[state=active]:bg-green-600 data-[state=active]:text-white">
                  Настройки
                </TabsTrigger>
              </TabsList>

              <TabsContent value="overview" className="space-y-6 mt-6">
                {/* Stats Cards */}
                <div className="grid md:grid-cols-3 gap-6">
                  <Card className="bg-slate-800/50 border-green-800/30 backdrop-blur-sm">
                    <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                      <CardTitle className="text-sm font-medium text-green-100">
                        Всего проектов
                      </CardTitle>
                      <FileText className="h-4 w-4 text-green-400" />
                    </CardHeader>
                    <CardContent>
                      <div className="text-2xl font-bold text-white">12</div>
                      <p className="text-xs text-green-300">
                        +2 за последний месяц
                      </p>
                    </CardContent>
                  </Card>
                  <Card className="bg-slate-800/50 border-green-800/30 backdrop-blur-sm">
                    <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                      <CardTitle className="text-sm font-medium text-green-100">
                        Активность
                      </CardTitle>
                      <Activity className="h-4 w-4 text-green-400" />
                    </CardHeader>
                    <CardContent>
                      <div className="text-2xl font-bold text-white">89%</div>
                      <p className="text-xs text-green-300">
                        +5% с прошлой недели
                      </p>
                    </CardContent>
                  </Card>
                  <Card className="bg-slate-800/50 border-green-800/30 backdrop-blur-sm">
                    <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                      <CardTitle className="text-sm font-medium text-green-100">
                        Рейтинг
                      </CardTitle>
                      <TrendingUp className="h-4 w-4 text-green-400" />
                    </CardHeader>
                    <CardContent>
                      <div className="text-2xl font-bold text-white">4.8</div>
                      <p className="text-xs text-green-300">
                        Отличная работа!
                      </p>
                    </CardContent>
                  </Card>
                </div>

                {/* Recent Activity */}
                <Card className="bg-slate-800/50 border-green-800/30 backdrop-blur-sm">
                  <CardHeader>
                    <CardTitle className="text-white">Последняя активность</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      {[
                        { action: "Создан новый проект", time: "2 часа назад", type: "create" },
                        { action: "Обновлен профиль", time: "1 день назад", type: "update" },
                        { action: "Завершен проект", time: "3 дня назад", type: "complete" },
                      ].map((item, index) => (
                        <div key={index} className="flex items-center space-x-4">
                          <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                          <div className="flex-1">
                            <p className="text-white text-sm">{item.action}</p>
                            <p className="text-green-300 text-xs">{item.time}</p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>

              <TabsContent value="profile" className="space-y-6 mt-6">
                <Card className="bg-slate-800/50 border-green-800/30 backdrop-blur-sm">
                  <CardHeader className="flex flex-row items-center justify-between">
                    <div>
                      <CardTitle className="text-white">Информация профиля</CardTitle>
                      <CardDescription className="text-green-100">
                        Управляйте своими личными данными
                      </CardDescription>
                    </div>
                    <Button
                      variant="outline"
                      size="sm"
                      onClick={() => setIsEditing(!isEditing)}
                      className="border-green-600 text-green-400 hover:bg-green-600 hover:text-white"
                    >
                      {isEditing ? (
                        <>
                          <X className="h-4 w-4 mr-2" />
                          Отмена
                        </>
                      ) : (
                        <>
                          <Edit className="h-4 w-4 mr-2" />
                          Редактировать
                        </>
                      )}
                    </Button>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="grid md:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="firstName" className="text-green-100">Имя</Label>
                        <Input
                          id="firstName"
                          defaultValue="Иван"
                          disabled={!isEditing}
                          className="bg-slate-700/50 border-green-800/30 text-white disabled:opacity-50"
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="lastName" className="text-green-100">Фамилия</Label>
                        <Input
                          id="lastName"
                          defaultValue="Иванов"
                          disabled={!isEditing}
                          className="bg-slate-700/50 border-green-800/30 text-white disabled:opacity-50"
                        />
                      </div>
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="email" className="text-green-100">Email</Label>
                      <Input
                        id="email"
                        type="email"
                        defaultValue="ivan@example.com"
                        disabled={!isEditing}
                        className="bg-slate-700/50 border-green-800/30 text-white disabled:opacity-50"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="bio" className="text-green-100">О себе</Label>
                      <Textarea
                        id="bio"
                        defaultValue="Опытный разработчик с 5-летним стажем работы в области веб-разработки."
                        disabled={!isEditing}
                        className="bg-slate-700/50 border-green-800/30 text-white disabled:opacity-50"
                      />
                    </div>
                    {isEditing && (
                      <Button className="bg-gradient-to-r from-green-600 to-green-700 hover:from-green-700 hover:to-green-800">
                        <Save className="h-4 w-4 mr-2" />
                        Сохранить изменения
                      </Button>
                    )}
                  </CardContent>
                </Card>
              </TabsContent>

              <TabsContent value="activity" className="space-y-6 mt-6">
                <Card className="bg-slate-800/50 border-green-800/30 backdrop-blur-sm">
                  <CardHeader>
                    <CardTitle className="text-white">История активности</CardTitle>
                    <CardDescription className="text-green-100">
                      Подробная информация о ваших действиях
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-6">
                      {[
                        {
                          date: "Сегодня",
                          activities: [
                            { time: "14:30", action: "Вход в систему", details: "IP: 192.168.1.1" },
                            { time: "12:15", action: "Создан проект", details: "Новый веб-сайт" },
                          ]
                        },
                        {
                          date: "Вчера",
                          activities: [
                            { time: "18:45", action: "Обновлен профиль", details: "Изменена фотография" },
                            { time: "16:20", action: "Завершен проект", details: "Мобильное приложение" },
                          ]
                        }
                      ].map((day, dayIndex) => (
                        <div key={dayIndex}>
                          <h3 className="text-green-400 font-semibold mb-3">{day.date}</h3>
                          <div className="space-y-3">
                            {day.activities.map((activity, actIndex) => (
                              <div key={actIndex} className="flex items-start space-x-4 p-3 rounded-lg bg-slate-700/30">
                                <div className="text-green-300 text-sm font-mono">{activity.time}</div>
                                <div className="flex-1">
                                  <p className="text-white text-sm">{activity.action}</p>
                                  <p className="text-green-200 text-xs">{activity.details}</p>
                                </div>
                              </div>
                            ))}
                          </div>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>

              <TabsContent value="settings" className="space-y-6 mt-6">
                <Card className="bg-slate-800/50 border-green-800/30 backdrop-blur-sm">
                  <CardHeader>
                    <CardTitle className="text-white">Настройки аккаунта</CardTitle>
                    <CardDescription className="text-green-100">
                      Управление настройками безопасности и уведомлений
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-6">
                    <div className="space-y-4">
                      <h3 className="text-green-400 font-semibold">Безопасность</h3>
                      <div className="space-y-3">
                        <Button variant="outline" className="w-full justify-start border-green-800/30 text-green-100 hover:bg-green-600 hover:text-white">
                          Изменить пароль
                        </Button>
                        <Button variant="outline" className="w-full justify-start border-green-800/30 text-green-100 hover:bg-green-600 hover:text-white">
                          Двухфакторная аутентификация
                        </Button>
                        <Button variant="outline" className="w-full justify-start border-green-800/30 text-green-100 hover:bg-green-600 hover:text-white">
                          Активные сессии
                        </Button>
                      </div>
                    </div>
                    <div className="space-y-4">
                      <h3 className="text-green-400 font-semibold">Уведомления</h3>
                      <div className="space-y-3">
                        <Button variant="outline" className="w-full justify-start border-green-800/30 text-green-100 hover:bg-green-600 hover:text-white">
                          Email уведомления
                        </Button>
                        <Button variant="outline" className="w-full justify-start border-green-800/30 text-green-100 hover:bg-green-600 hover:text-white">
                          Push уведомления
                        </Button>
                      </div>
                    </div>
                    <div className="pt-4 border-t border-green-800/30">
                      <Button variant="destructive" className="w-full">
                        Удалить аккаунт
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>
            </Tabs>
          </div>
        </div>
      </div>
    </div>
  )
}
