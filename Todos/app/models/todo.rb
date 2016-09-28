class Todo < ActiveRecord::Base
  TRUE_FALSE = [true, false]

  validates :title, :body, presence: true
  validates :done, inclusion: { in: TRUE_FALSE }
  
end
