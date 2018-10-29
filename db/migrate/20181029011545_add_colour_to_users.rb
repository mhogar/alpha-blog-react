class AddColourToUsers < ActiveRecord::Migration[5.1]
  def change
    add_column :users, :colour, :text
  end
end
