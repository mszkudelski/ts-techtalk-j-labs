export interface CourierDelivery {
  type: "courier";
  street: string;
  localNumber: number;
  city: string;
}

export interface ParcelLockerDelivery {
  type: "parcel-locker";
  parcelLockerId: string;
  city: string;
  parcelLockerAddress: string;
}

type DeliveryType = CourierDelivery | ParcelLockerDelivery;

export function stringifyDeliveryAddress(delivery: DeliveryType): string {
  if (delivery.type === "courier") {
    return `${delivery.street} ${delivery.localNumber}
${delivery.city}`;
  }

  return `${delivery.parcelLockerAddress}
${delivery.city} (${delivery.parcelLockerId})`;
}
