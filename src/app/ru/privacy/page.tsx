import { getAlternates } from '@/lib/i18n'
import { Metadata } from 'next'
import { PageMasthead } from '@/components/layout/PageMasthead'

export const metadata: Metadata = {
  title: 'Политика конфиденциальности',
  description: 'Политика конфиденциальности CrownPro — информация о ваших личных данных и использовании файлов cookie.',
  alternates: getAlternates('ru', '/privacy'),
  robots: { index: false, follow: false },
}

export default function RuPrivacyPage() {
  return (
    <>
      <PageMasthead locale="ru" section="privacy" title="Политика конфиденциальности" />
      <div className="inner-wrap policy-page">
        <div className="reading-column space-y-8">
          <div>
            <p className="text-sm text-stone-600">Последнее обновление: 18 ноября 2026</p>
          </div>

          <section className="space-y-3">
            <h2 className="text-xl font-bold text-gray-800">1. Общие сведения</h2>
            <p className="text-gray-600 leading-relaxed">
              Настоящая политика конфиденциальности объясняет, как <strong>CrownPro</strong> (<a href="https://antalyaagacbudama.com" className="text-[#37543d] hover:underline">antalyaagacbudama.com</a>) собирает, использует и защищает данные посетителей сайта.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl font-bold text-gray-800">2. Собираемые данные</h2>
            <h3 className="font-semibold text-gray-700">Контактная форма</h3>
            <p className="text-gray-600 leading-relaxed">
              Имя, адрес электронной почты, необязательный номер телефона, тема и сообщение из формы используются для создания черновика в вашем почтовом приложении. Форма не отправляет эти данные на сервер сайта и не сохраняет их в файл. Если вы отправите черновик в почтовом приложении, мы получим сообщение и используем его для ответа на ваш запрос.
            </p>
            <h3 className="font-semibold text-gray-700 mt-4">IP-адрес</h3>
            <p className="text-gray-600 leading-relaxed">
              Форма не отправляет запрос на этот сайт и не создаёт запись IP-адреса отправителя формы.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl font-bold text-gray-800">3. Использование файлов cookie</h2>
            <p className="text-gray-600 leading-relaxed">
              На сайте используется <strong>только один функциональный файл cookie</strong>:
            </p>
            <div className="overflow-x-auto bg-[#eae9dd] p-4">
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
                    <td className="pt-3 font-mono text-[#37543d]">NEXT_LOCALE</td>
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
              Вы можете изменить язык с помощью кнопок выбора языка или удалить файл cookie в настройках браузера.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl font-bold text-gray-800">4. Сторонние сервисы</h2>
            <p className="text-gray-600 leading-relaxed">
              На сайте не используются Google Analytics, Facebook Pixel и аналогичные инструменты отслеживания. При загрузке карты Google Maps на странице контактов браузер подключается к Google. Отправленные вами письма передаются через вашего почтового провайдера. Карты, почтовые сервисы и социальные сети обрабатывают данные в соответствии со своими политиками конфиденциальности.
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
              Для реализации своих прав обращайтесь: <a href="mailto:ruzgarozdemir@crownprotr.com" className="text-[#37543d] hover:underline">ruzgarozdemir@crownprotr.com</a>
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl font-bold text-gray-800">6. Контакты</h2>
            <p className="text-gray-600 leading-relaxed">
              CrownPro — Muratpaşa, Анталья, Турция<br />
              Email: <a href="mailto:ruzgarozdemir@crownprotr.com" className="text-[#37543d] hover:underline">ruzgarozdemir@crownprotr.com</a><br />
              Тел.: <a href="tel:+905511672228" className="text-[#37543d] hover:underline">+90 551 167 22 28</a>
            </p>
          </section>
        </div>
      </div>
    </>
  )
}
