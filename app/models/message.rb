class Message < ApplicationRecord
  validates :language, uniqueness: true, presence: true
  validates :code_a, :code_b, presence: true, format: { with: /\A0x([0-9A-Fa-f]){5}\Z/ }
  validates :content, length: { maximum: 100 }, presence: true
end
