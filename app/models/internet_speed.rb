class InternetSpeed < ApplicationRecord
  belongs_to :place

  scope :latest, -> { order(created_at: :desc).first }
end
