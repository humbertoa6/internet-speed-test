class PlaceSerializer < ActiveModel::Serializer
  attributes :id, :name, :city, :recent_upload_speed,
    :recent_upload_speed_units, :number_of_measurements


  def recent_upload_speed
    object.internet_speeds.latest.download_speed
  end

  def recent_upload_speed_units
    object.internet_speeds.latest.download_units
  end

  def number_of_measurements
    object.internet_speeds.size
  end
end
