import React from 'react'
import './Promo.scss'

function Promo({ elementToScrollRef, isWebP }) {
  const isIphone = window.navigator.userAgent
    .toLowerCase()
    .match(/iphone|ipad/i)

  return (
    <div className="Promo">
      <div className="Promo_box">
        <div className="Promo_box_clubs">
          <div className="Promo_box_clubs_text-1">
            Мультивселенная из фитнес-сетей и клубов
          </div>
          <div className="Promo_box_clubs_text-2">
            Множество клубов и сетей позолят выбрать оптимальный вариант.<br/>
            Оформляй мультиклубные карты и ходи хоть куда и хоть когда.
          </div>
          <div className="Promo_box_clubs_imagebox">
            <div className="Promo_box_clubs_imagebox_img-1"></div>
            <div className="Promo_box_clubs_imagebox_img-2"></div>
            <div className="Promo_box_clubs_imagebox_img-3">
              <div className="Promo_box_clubs_imagebox_img-3_img-a"></div>
              <div className="Promo_box_clubs_imagebox_img-3_img-b"></div>
            </div>
          </div>
        </div>
        <div className="Promo_box_coach">
          <div className="Promo_box_coach_bg"></div>
          <div className={`Promo_box_coach_${isWebP ? 'webP' : 'png'}`}></div>
          <div className="Promo_box_coach_item">
            <div className="Promo_box_coach_item_text-1">Крутые тренера</div>
            <div className="Promo_box_coach_item_text-2">
              Молодые, дружелюбные ребята. Помогут на твоем пути к
              самосовершенствованию. Все прошли мега отбор, обученные и
              дипломированные специалисты.
            </div>
            <div className="Promo_box_coach_item_block">
              <div className="Promo_box_coach_item_block_col">
                <div className="Promo_box_coach_item_block_col_row-1">
                  1 000+
                </div>
                <div className="Promo_box_coach_item_block_col_row-2">
                  Тренеров со всех клубов
                </div>
              </div>
              <div className="Promo_box_coach_item_block_col">
                <div className="Promo_box_coach_item_block_col_row-1">
                  1 000+
                </div>
                <div className="Promo_box_coach_item_block_col_row-2">
                  Тренеров со всех клубов
                </div>
              </div>
            </div>
          </div>
        </div>
        <div ref={elementToScrollRef} className="Promo_box_download">
          <div className="Promo_box_download_item">
            <div className="Promo_box_download_item_col-1">
              <div className="Promo_box_download_item_col-1_row-1">
                Скачай приложение
              </div>
              <div className="Promo_box_download_item_col-1_row-2">
                <a
                  href={`${
                    isIphone
                      ? 'https://apps.apple.com/ru/app/bitafit/id1591904801?l=en'
                      : 'https://play.google.com/store/apps/details?id=com.bitafit.client'
                  } `}
                >
                  <div className="Promo_box_download_item_col-1_row-2_button">
                    <div
                      className={`Promo_box_download_item_col-1_row-2_button_icon-${
                        isIphone ? '1' : '2'
                      }`}
                    ></div>
                  </div>
                </a>

                <a
                  href={`${
                    isIphone
                      ? 'https://play.google.com/store/apps/details?id=com.bitafit.client'
                      : 'https://apps.apple.com/ru/app/bitafit/id1591904801?l=en'
                  } `}
                >
                  <div className="Promo_box_download_item_col-1_row-2_button">
                    <div
                      className={`Promo_box_download_item_col-1_row-2_button_icon-${
                        isIphone ? '2' : '1'
                      }`}
                    ></div>
                  </div>
                </a>
              </div>
            </div>
            <div className="Promo_box_download_item_col-2">
              <div className="Promo_box_download_item_col-2_square">
                <div className="Promo_box_download_item_col-2_square_icon-qr"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Promo
