import { Envelop } from "@/assets/icons/Evelop"
import { Map } from "@/assets/icons/Map"
import { Phone } from "@/assets/icons/Phone"

export const contactDetail = {
    address: {
        val: '123 Demo St, Lakeland, FL 45678, United States.',
        icon: <Map className="text-primary-light !w-8 !h-8"/>
    },
    phone: {
        val: '+1 123-456-7890',
        icon: <Phone className="text-primary-light !w-8 !h-8"/>
    },
    email: {
        val: 'mail@example.com',
        icon: <Envelop className="text-primary-light !w-8 !h-8"/>
    },
}