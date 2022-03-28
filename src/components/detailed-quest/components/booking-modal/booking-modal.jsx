import * as S from './booking-modal.styled';
import { ReactComponent as IconClose } from 'assets/img/icon-close.svg';
import { useState } from 'react';
import { sendData } from 'functions/api/api';
import { SERVER_URL } from 'functions/consts/consts';

const BookingModal = ({ onCloseClick }) => {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [peopleCount, setPeopleCount] = useState("");
  const [isAgree, setIsAgree] = useState(false);

  const isBookingReady = name && phone && peopleCount && isAgree;

  const handleSubmit = (evt) => {
    evt.preventDefault();

    if (isBookingReady) {
      const data = JSON.stringify({
        name: "Jon Vek",
        peopleCount: 1,
        phone: "70000000",
        isLegal: true
      }, null, "\t");

      console.log(data);

      fetch(
        `http://localhost:3001/orders`,
        {
          method: "POST",
          body: data
        }
      )
      .then((response) => {
        if (response.ok) {
          alert("Данные отправлены!");
        }

        throw new Error();
      })
      .catch(() => alert("Ошибка отправки данных"));
    }
  }

  return (
    <S.BlockLayer>
      <S.Modal>
        <S.ModalCloseBtn onClick={() => onCloseClick && onCloseClick()}>
          <IconClose width="16" height="16" />
          <S.ModalCloseLabel>Закрыть окно</S.ModalCloseLabel>
        </S.ModalCloseBtn>
        <S.ModalTitle>Оставить заявку</S.ModalTitle>
        <S.BookingForm
          action={`${SERVER_URL}/orders`}
          method="post"
          id="booking-form"
          onSubmit={handleSubmit}
        >
          <S.BookingField>
            <S.BookingLabel htmlFor="booking-name">Ваше Имя</S.BookingLabel>
            <S.BookingInput
              type="text"
              id="booking-name"
              name="booking-name"
              placeholder="Имя"
              value={name}
              required
              onChange={(e) => setName(e.target.value)}
            />
          </S.BookingField>
          <S.BookingField>
            <S.BookingLabel htmlFor="booking-phone">
              Контактный телефон
            </S.BookingLabel>
            <S.BookingInput
              type="tel"
              id="booking-phone"
              name="booking-phone"
              placeholder="Телефон"
              value={phone}
              required
              onChange={(e) => setPhone(e.target.value)}
            />
          </S.BookingField>
          <S.BookingField>
            <S.BookingLabel htmlFor="booking-people">
              Количество участников
            </S.BookingLabel>
            <S.BookingInput
              type="number"
              id="booking-people"
              name="booking-people"
              placeholder="Количество участников"
              value={peopleCount}
              required
              onChange={(e) => setPeopleCount(e.target.value)}
            />
          </S.BookingField>
          <S.BookingSubmit
            type="submit"
            $isActive={isBookingReady}
          >
            Отправить заявку
          </S.BookingSubmit>
          <S.BookingCheckboxWrapper>
            <S.BookingCheckboxInput
              type="checkbox"
              id="booking-legal"
              name="booking-legal"
              checked={isAgree}
              required
              onChange={(e) => setIsAgree(e.target.checked)}
            />
            <S.BookingCheckboxLabel
              className="checkbox-label"
              htmlFor="booking-legal"
            >
              <S.BookingCheckboxText>
                Я согласен с{' '}
                <S.BookingLegalLink href="#">
                  правилами обработки персональных данных и пользовательским
                  соглашением
                </S.BookingLegalLink>
              </S.BookingCheckboxText>
            </S.BookingCheckboxLabel>
          </S.BookingCheckboxWrapper>
        </S.BookingForm>
      </S.Modal>
    </S.BlockLayer>
  )
};

export default BookingModal;
