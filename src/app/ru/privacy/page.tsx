import { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Политика конфиденциальности',
  description: 'Политика конфиденциальности CrownPro — информация о ваших личных данных и использовании файлов cookie.',
  robots: { index: false, follow: false },
}

export default function RuPrivacyPage() {
  return (
    <div className="bg-[#f5f2ed] min-h-screen py-20">
      <div className="container mx-auto px-6 max-w-3xl">
        <div className="mb-8">
          <Link href="/ru" className="text-sm text-green-700 hover:underline">← Главная</Link>
        </div>

        <div className="bg-white rounded-2xl shadow-sm p-8 md:p-12 space-y-8">
          <div>
            <h1 className="text-3xl font-bold text-gray-900 mb-2">Политика конфиденциальности</h1>
            <p className="text-sm text-gray-400">Последнее обновление: май 2025</p>
          </div>

          <section className="space-y-3">
            <h2 className="text-xl font-bold text-gray-800">1. Общие сведения</h2>
            <p className="text-gray-600 leading-relaxed">
              Настоящая политика конфиденциальности объясняет, как <strong>CrownPro</strong> (<a href="https://antalyaagacbudama.com" className="text-green-700 hover:underline">antalyaagacbudama.com</a>) собирает, использует и защищает данные посетителей сайта.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl font-bold text-gray-800">2. Собираемые данные</h2>
            <h3 className="font-semibold text-gray-700">Контактная форма</h3>
            <p className="text-gray-600 leading-relaxed">
              При отправке контактной формы собираются следующие данные: имя и фамилия, адрес электронной почты, номер телефона (необязательно), тема и содержание сообщения. Эти данные используются исключительно для ответа на ваш запрос и не передаются третьим лицам.
            </p>
            <h3 className="font-semibold text-gray-700 mt-4">IP-адрес</h3>
            <p className="text-gray-600 leading-relaxed">
              При отправке контактной формы фиксируется ваш IP-адрес в целях предотвращения спама и злоупотреблений. Эта информация хранится исключительно в целях безопасности.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl font-bold text-gray-800">3. Использование файлов cookie</h2>
            <p className="text-gray-600 leading-relaxed">
              На сайте используется <strong>только один функциональный файл cookie</strong>:
            </p>
            <div className="bg-gray-50 rounded-xl p-5 border border-gray-100">
              <table className="w-full text-sm">
                <thead>
                  <tr className="text-left text-gray-500 border-b border-gray-200">
                    <th className="pb-2 font-semibold">Название</th>
                    <th className="pb-2 font-semibold">Назначение</th>
                    <th className="pb-2 font-semibold">Срок хранения</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="text-gray-700">
                    <td className="pt-3 font-mono text-green-700">NEXT_LOCALE</td>
                    <td className="pt-3">Сохранение языковых предпочтений</td>
                    <td className="pt-3">1 год</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <p className="text-gray-600 leading-relaxed">
              Этот файл cookie сохраняет выбранный язык (турецкий, английский или русский), определённый автоматически на основе настроек вашего браузера. Он не содержит персональных данных и не используется для отслеживания, рекламы или аналитики.
            </p>
            <p className="text-gray-600 leading-relaxed">
              Поскольку данный файл cookie необходим для базовой функциональности сайта, в соответствии с GDPR он относится к категории «строго необходимых файлов cookie» и не требует отдельного согласия.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl font-bold text-gray-800">4. Сторонние сервисы</h2>
            <p className="text-gray-600 leading-relaxed">
              На сайте не используются Google Analytics, Facebook Pixel и аналогичные инструменты отслеживания. Ссылки на социальные сети (Instagram, Facebook, YouTube, TikTok, WhatsApp) регулируются их собственными политиками конфиденциальности.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl font-bold text-gray-800">5. Ваши права</h2>
            <p className="text-gray-600 leading-relaxed">
              В соответствии с GDPR вы имеете следующие права:
            </p>
            <ul className="list-disc pl-5 space-y-1 text-gray-600">
              <li>Право на доступ к своим данным</li>
              <li>Право на удаление данных («право быть забытым»)</li>
              <li>Право на исправление данных</li>
              <li>Право на возражение против обработки</li>
            </ul>
            <p className="text-gray-600 leading-relaxed">
              Для реализации своих прав обращайтесь: <a href="mailto:ruzgarozdemir@crownprotr.com" className="text-green-700 hover:underline">ruzgarozdemir@crownprotr.com</a>
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl font-bold text-gray-800">6. Контакты</h2>
            <p className="text-gray-600 leading-relaxed">
              CrownPro — Muratpaşa, Анталья, Турция<br />
              Email: <a href="mailto:ruzgarozdemir@crownprotr.com" className="text-green-700 hover:underline">ruzgarozdemir@crownprotr.com</a><br />
              Тел.: <a href="tel:+905511672228" className="text-green-700 hover:underline">+90 551 167 22 28</a>
            </p>
          </section>
        </div>
      </div>
    </div>
  )
}
