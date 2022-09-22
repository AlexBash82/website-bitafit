import React, { useState } from 'react'
import './Schedule.scss'

function Schedule({ executeScroll, htmlElRef2, isWebP }) {
  const [selButton, setSelButton] = useState(1)
  const buttons = [1, 2, 3, 4, 5]

  return (
    <div ref={htmlElRef2} className="Schedule">
      <div className="Schedule_image">
        <div className="Schedule_image_gradient"></div>
        <div className={`Schedule_image_${isWebP ? 'webP' : 'png'}`}></div>
      </div>

      <div className="Schedule_frame">
        <div className="Schedule_frame_group">
          {buttons.map((ind) => {
            return (
              <button
                key={ind}
                onClick={() => setSelButton(ind)}
                className={`Schedule_frame_group_button ${
                  selButton === ind ? 'active' : ''
                } `}
              >
                <span>{ind}</span>
              </button>
            )
          })}
        </div>
        {selButton === 1 ? (
          <>
            <div className="Schedule_frame_text-1">
              Составляй план тренировок 1
            </div>
            <div className="Schedule_frame_text-2">
              Описание основной фичи 3-4 строки, Описание основной фичи 3-4
              строки,Описание основной фичи 3-4 строки,Описание основной фичи
              3-4 строки,Описание основной фичи 3-4 строки, ...
            </div>
          </>
        ) : selButton === 2 ? (
          <>
            <div className="Schedule_frame_text-1">
              Составляй план тренировок 2
            </div>
            <div className="Schedule_frame_text-2">
              ...основной фичи 3-4 строки, Описание основной фичи 3-4
              строки,Описание основной фичи 3-4 строки,Описание основной фичи
              3-4 строки,Описание основной фичи 3-4 строки, Описание
            </div>
          </>
        ) : selButton === 3 ? (
          <>
            <div className="Schedule_frame_text-1">
              Составляй план тренировок 3
            </div>
            <div className="Schedule_frame_text-2">
              ...фичи 3-4 строки, Описание основной фичи 3-4 строки,Описание
              основной фичи 3-4 строки,Описание основной фичи 3-4
              строки,Описание основной фичи 3-4 строки, Описание основной
            </div>
          </>
        ) : selButton === 4 ? (
          <>
            <div className="Schedule_frame_text-1">
              Составляй план тренировок 4
            </div>
            <div className="Schedule_frame_text-2">
              ...3-4 строки, Описание основной фичи 3-4 строки,Описание основной
              фичи 3-4 строки,Описание основной фичи 3-4 строки,Описание
              основной фичи 3-4 строки, Описание основной фичи
            </div>
          </>
        ) : selButton === 5 ? (
          <>
            <div className="Schedule_frame_text-1">
              Составляй план тренировок 5
            </div>
            <div className="Schedule_frame_text-2">
              ...Описание основной фичи 3-4 строки,Описание основной фичи 3-4
              строки,Описание основной фичи 3-4 строки,Описание основной фичи
              3-4 строки, Описание основной фичи 3-4 строки
            </div>
          </>
        ) : (
          <></>
        )}
        <button onClick={executeScroll} className="Schedule_frame_button">
          Скачать приложение
        </button>
      </div>
      <div className="Schedule_phone">
        <div
          className={`Schedule_phone_display-${selButton}_${
            isWebP ? 'webP' : 'jpg'
          }`}
        ></div>
        <div className="Schedule_phone_rectangle-1"></div>
        <div className="Schedule_phone_rectangle-2"></div>
      </div>
    </div>
  )
}

export default Schedule
