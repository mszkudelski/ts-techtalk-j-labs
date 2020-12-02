export interface CourierDelivery {
  street: string;
  localNumber: number;
  city: string;
}

export interface ParcelLockerDelivery {
  parcelLockerId: string;
  city: string;
  parcelLockerAddress: string;
}

export function stringifyDeliveryAddress(delivery): string {
  if (delivery.type === "courier") {
    return `${delivery.street} ${delivery.localNumber}
${delivery.city}`;
  }

  return `${delivery.parcelLockerAddress}
${delivery.city} (${delivery.parcelLockerId})`;
}
