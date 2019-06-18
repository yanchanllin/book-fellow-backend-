class CreateReviews < ActiveRecord::Migration[5.2]
  def change
    create_table :reviews do |t|
      t.string :content
      t.string :rating
      t.string :user_id
      t.string :book_id

      t.timestamps
    end
  end
end
