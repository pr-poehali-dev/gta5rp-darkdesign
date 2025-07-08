import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Icon from "@/components/ui/icon";

const Index = () => {
  const products = [
    {
      id: 1,
      name: "1,000 Виртов",
      price: "199 ₽",
      discount: "10%",
      server: "Arizona RP",
    },
    {
      id: 2,
      name: "5,000 Виртов",
      price: "899 ₽",
      discount: "15%",
      server: "Trinity RP",
    },
    {
      id: 3,
      name: "10,000 Виртов",
      price: "1,699 ₽",
      discount: "20%",
      server: "Absolute RP",
    },
    {
      id: 4,
      name: "25,000 Виртов",
      price: "3,999 ₽",
      discount: "25%",
      server: "Amazing RP",
    },
  ];

  const features = [
    {
      icon: "Zap",
      title: "Быстрая выдача",
      desc: "Автоматическая выдача за 30 секунд",
    },
    {
      icon: "Shield",
      title: "Гарантия безопасности",
      desc: "100% защита от блокировок",
    },
    {
      icon: "Server",
      title: "Все серверы",
      desc: "Поддержка всех популярных серверов",
    },
    {
      icon: "CreditCard",
      title: "Удобная оплата",
      desc: "Карты, криптовалюта, СБП",
    },
  ];

  const reviews = [
    { name: "Дмитрий", rating: 5, text: "Быстро, качественно, без проблем!" },
    { name: "Анна", rating: 5, text: "Отличный сервис, рекомендую всем!" },
    { name: "Максим", rating: 5, text: "Пользуюсь уже полгода, всё отлично!" },
  ];

  return (
    <div className="min-h-screen bg-background text-foreground font-rubik">
      {/* Header */}
      <header className="border-b border-border bg-card/50 backdrop-blur-sm sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <Icon name="Gamepad2" className="text-primary" size={32} />
            <span className="text-2xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              VirtShop
            </span>
          </div>
          <nav className="hidden md:flex space-x-8">
            <a href="#home" className="hover:text-primary transition-colors">
              Главная
            </a>
            <a
              href="#products"
              className="hover:text-primary transition-colors"
            >
              Товары
            </a>
            <a href="#about" className="hover:text-primary transition-colors">
              О нас
            </a>
            <a href="#support" className="hover:text-primary transition-colors">
              Поддержка
            </a>
            <a href="#reviews" className="hover:text-primary transition-colors">
              Отзывы
            </a>
          </nav>
          <Button className="bg-primary hover:bg-primary/90">
            <Icon name="ShoppingCart" size={16} className="mr-2" />
            Корзина
          </Button>
        </div>
      </header>

      {/* Hero Section */}
      <section id="home" className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-accent/20" />
        <div className="container mx-auto px-4 py-20 relative z-10">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <h1 className="text-5xl md:text-6xl font-bold leading-tight">
                Покупай{" "}
                <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                  виртуальную валюту
                </span>{" "}
                для GTA 5 RP
              </h1>
              <p className="text-xl text-muted-foreground">
                Быстрая выдача, все серверы, гарантия безопасности. Более 50,000
                довольных клиентов!
              </p>
              <div className="flex flex-wrap gap-4">
                <Button
                  size="lg"
                  className="bg-primary hover:bg-primary/90 text-lg px-8 py-6"
                >
                  <Icon name="ShoppingBag" className="mr-2" size={20} />
                  Купить виртуальную валюту
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="text-lg px-8 py-6"
                >
                  <Icon name="HelpCircle" className="mr-2" size={20} />
                  Как купить?
                </Button>
              </div>
            </div>
            <div className="relative">
              <img
                src="/img/cd8977da-d0b3-4641-bbb3-68d530ed0dc0.jpg"
                alt="GTA Виртуальная валюта"
                className="w-full rounded-2xl shadow-2xl border border-border"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Products Section */}
      <section id="products" className="py-20 bg-card/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Популярные пакеты</h2>
            <p className="text-xl text-muted-foreground">
              Выбери подходящий пакет виртуальной валюты
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {products.map((product) => (
              <Card
                key={product.id}
                className="relative group hover:shadow-xl transition-all duration-300 hover:scale-105 bg-card/60 backdrop-blur-sm border-border"
              >
                <CardHeader className="pb-4">
                  <div className="flex justify-between items-start">
                    <CardTitle className="text-2xl font-bold">
                      {product.name}
                    </CardTitle>
                    <Badge className="bg-accent/20 text-accent border-accent/30">
                      -{product.discount}
                    </Badge>
                  </div>
                  <CardDescription className="text-sm text-muted-foreground">
                    {product.server}
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="text-3xl font-bold text-primary">
                    {product.price}
                  </div>
                  <Button className="w-full bg-primary hover:bg-primary/90 group-hover:scale-105 transition-transform">
                    <Icon name="ShoppingCart" className="mr-2" size={16} />
                    Купить
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Наши преимущества</h2>
            <p className="text-xl text-muted-foreground">
              Почему выбирают именно нас
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <div
                key={index}
                className="text-center group hover:scale-105 transition-transform"
              >
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-primary/20 transition-colors">
                  <Icon
                    name={feature.icon}
                    className="text-primary"
                    size={32}
                  />
                </div>
                <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                <p className="text-muted-foreground">{feature.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Reviews Section */}
      <section id="reviews" className="py-20 bg-card/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Отзывы клиентов</h2>
            <p className="text-xl text-muted-foreground">
              Что говорят о нас наши клиенты
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {reviews.map((review, index) => (
              <Card
                key={index}
                className="bg-card/60 backdrop-blur-sm border-border hover:shadow-lg transition-shadow"
              >
                <CardHeader className="pb-4">
                  <div className="flex items-center space-x-2">
                    <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center">
                      <Icon name="User" className="text-primary" size={20} />
                    </div>
                    <div>
                      <CardTitle className="text-lg">{review.name}</CardTitle>
                      <div className="flex space-x-1">
                        {[...Array(review.rating)].map((_, i) => (
                          <Icon
                            key={i}
                            name="Star"
                            className="text-accent fill-accent"
                            size={16}
                          />
                        ))}
                      </div>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">"{review.text}"</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-primary/10 to-accent/10">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-4">Готов начать играть?</h2>
          <p className="text-xl text-muted-foreground mb-8">
            Присоединяйся к тысячам довольных игроков GTA 5 RP
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              size="lg"
              className="bg-primary hover:bg-primary/90 text-lg px-8 py-6"
            >
              <Icon name="ShoppingBag" className="mr-2" size={20} />
              Купить виртуальную валюту
            </Button>
            <Button size="lg" variant="outline" className="text-lg px-8 py-6">
              <Icon name="MessageCircle" className="mr-2" size={20} />
              Связаться с поддержкой
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-border bg-card/50 backdrop-blur-sm">
        <div className="container mx-auto px-4 py-12">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <Icon name="Gamepad2" className="text-primary" size={24} />
                <span className="text-xl font-bold">VirtShop</span>
              </div>
              <p className="text-muted-foreground">
                Надежный магазин виртуальной валюты для GTA 5 RP
              </p>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Товары</h4>
              <ul className="space-y-2 text-muted-foreground">
                <li>
                  <a href="#" className="hover:text-primary">
                    Arizona RP
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-primary">
                    Trinity RP
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-primary">
                    Absolute RP
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-primary">
                    Amazing RP
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Поддержка</h4>
              <ul className="space-y-2 text-muted-foreground">
                <li>
                  <a href="#" className="hover:text-primary">
                    Как купить
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-primary">
                    Оплата
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-primary">
                    Доставка
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-primary">
                    Гарантии
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Контакты</h4>
              <ul className="space-y-2 text-muted-foreground">
                <li className="flex items-center space-x-2">
                  <Icon name="MessageCircle" size={16} />
                  <span>Telegram: @virtshop</span>
                </li>
                <li className="flex items-center space-x-2">
                  <Icon name="Mail" size={16} />
                  <span>support@virtshop.ru</span>
                </li>
                <li className="flex items-center space-x-2">
                  <Icon name="Clock" size={16} />
                  <span>24/7 Поддержка</span>
                </li>
              </ul>
            </div>
          </div>
          <div className="border-t border-border mt-8 pt-8 text-center text-muted-foreground">
            <p>&copy; 2024 VirtShop. Все права защищены.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
