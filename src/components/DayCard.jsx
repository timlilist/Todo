import LogoList from '../icons/list.svg';


export default function DayCard({ day }) {
    return (
        <div className='dayCard'>
            <img className='dayPicture' src={LogoList} alt="" />
            <p className='dayName'>{day}</p>
        </div>
    )
}